#!/usr/bin/env node
/**
 * figma-sync.mts
 *
 * Syncs the Planhat Lab design system with the Figma shadcn file.
 *
 * Usage:
 *   FIGMA_ACCESS_TOKEN=xxx npx tsx scripts/figma-sync.mts [--discover] [--generate] [--tokens] [--publish] [--all]
 *
 * Modes:
 *   --discover   Fetches the Figma file, finds all component sets, writes figma-nodes.json
 *   --generate   Reads figma-nodes.json, creates/updates .figma.tsx files for each component
 *   --tokens     Fetches Figma Variables and patches src/index.css with updated values
 *   --publish    Runs `figma connect publish` to push Code Connect to Figma
 *   --all        Runs all of the above in sequence
 */

import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

// ─── Config ──────────────────────────────────────────────────────────────────

const FILE_KEY = "RKLvXKJ8SjezSr3ZLKBjhw"
const API_BASE = "https://api.figma.com/v1"
const NODES_FILE = path.join(ROOT, "figma-nodes.json")
const UI_DIR = path.join(ROOT, "src/components/ui")
const INDEX_CSS = path.join(ROOT, "src/index.css")

// Maps local component filename (without .tsx) → expected Figma component set name
const COMPONENT_NAME_MAP: Record<string, string> = {
  accordion: "Accordion",
  alert: "Alert",
  "alert-dialog": "Alert Dialog",
  avatar: "Avatar",
  badge: "Badge",
  breadcrumb: "Breadcrumb",
  button: "Button",
  "button-group": "ButtonGroup",
  card: "Card",
  carousel: "Carousel",
  checkbox: "Checkbox",
  collapsible: "Collapsible",
  command: "Command",
  "context-menu": "ContextMenu",
  drawer: "Drawer",
  "hover-card": "Hover Card",
  input: "Input",
  "input-otp": "InputOTP",
  "input-group": "InputGroup",
  progress: "Progress",
  "radio-group": "RadioButton",
  select: "Select",
  separator: "Separator",
  sheet: "Sheet",
  skeleton: "Skeleton",
  slider: "Slider",
  switch: "Switch",
  tabs: "Tabs",
  textarea: "Textarea",
  toggle: "Toggle",
  "toggle-group": "Toggle Group",
  tooltip: "Tooltip",
  kbd: "Kbd",
  spinner: "Spinner",
  sonner: "Sonner",
}

// ─── API Helpers ──────────────────────────────────────────────────────────────

function getToken(): string {
  const token = process.env.FIGMA_ACCESS_TOKEN
  if (!token) {
    console.error("❌ FIGMA_ACCESS_TOKEN environment variable is not set.")
    console.error("   Create a token at figma.com → Settings → Personal access tokens")
    console.error("   Then run: FIGMA_ACCESS_TOKEN=your_token npx tsx scripts/figma-sync.mts")
    process.exit(1)
  }
  return token
}

async function figmaGet(endpoint: string): Promise<unknown> {
  const token = getToken()
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "X-Figma-Token": token },
  })
  if (!res.ok) {
    throw new Error(`Figma API error ${res.status}: ${await res.text()}`)
  }
  return res.json()
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface FigmaNode {
  id: string
  name: string
  type: string
  children?: FigmaNode[]
}

interface FigmaFile {
  document: FigmaNode
  name: string
}

interface FigmaVariables {
  variables: Record<string, FigmaVariable>
  variableCollections: Record<string, FigmaVariableCollection>
}

interface FigmaVariable {
  id: string
  name: string
  resolvedType: string
  valuesByMode: Record<string, unknown>
}

interface FigmaVariableCollection {
  id: string
  name: string
  modes: Array<{ modeId: string; name: string }>
  defaultModeId: string
}

interface NodeMapping {
  nodeId: string
  name: string
  localFile: string
  componentName: string
  variants: VariantInfo[]
}

interface VariantInfo {
  name: string
  values: string[]
}

// ─── Discover ─────────────────────────────────────────────────────────────────

function findComponentSets(node: FigmaNode, results: FigmaNode[] = []): FigmaNode[] {
  if (node.type === "COMPONENT_SET") {
    results.push(node)
  }
  if (node.children) {
    for (const child of node.children) {
      findComponentSets(child, results)
    }
  }
  return results
}

function extractVariants(componentSet: FigmaNode): VariantInfo[] {
  const variantMap = new Map<string, Set<string>>()

  for (const child of componentSet.children ?? []) {
    // child.name looks like "Variant=Default, State=Hover, Size=sm"
    const parts = child.name.split(", ")
    for (const part of parts) {
      const [key, value] = part.split("=")
      if (key && value) {
        if (!variantMap.has(key)) variantMap.set(key, new Set())
        variantMap.get(key)!.add(value)
      }
    }
  }

  return Array.from(variantMap.entries()).map(([name, values]) => ({
    name,
    values: Array.from(values),
  }))
}

async function discover(): Promise<void> {
  console.log("🔍 Fetching Figma file structure...")

  const file = (await figmaGet(`/files/${FILE_KEY}?depth=4`)) as FigmaFile
  console.log(`   File: ${file.name}`)

  const componentSets = findComponentSets(file.document)
  console.log(`   Found ${componentSets.length} component sets`)

  // Build name → node mapping
  const byName = new Map(componentSets.map((cs) => [cs.name.toLowerCase(), cs]))

  const mappings: NodeMapping[] = []
  const unmatched: string[] = []

  for (const [localName, figmaName] of Object.entries(COMPONENT_NAME_MAP)) {
    const localFile = path.join(UI_DIR, `${localName}.tsx`)
    if (!fs.existsSync(localFile)) continue

    const node = byName.get(figmaName.toLowerCase())
    if (!node) {
      unmatched.push(`${localName} → "${figmaName}"`)
      continue
    }

    const exportName = localName
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("")

    mappings.push({
      nodeId: node.id,
      name: figmaName,
      localFile: `src/components/ui/${localName}.tsx`,
      componentName: exportName,
      variants: extractVariants(node),
    })
  }

  fs.writeFileSync(NODES_FILE, JSON.stringify(mappings, null, 2))
  console.log(`\n✅ Wrote ${mappings.length} mappings to figma-nodes.json`)

  if (unmatched.length > 0) {
    console.log(`\n⚠️  Could not find Figma nodes for:`)
    for (const u of unmatched) console.log(`   - ${u}`)
  }
}

// ─── Generate ─────────────────────────────────────────────────────────────────

// Figma variant names that are design-only states (not code props)
const DESIGN_STATES = new Set(["state", "theme", "dark"])

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c: string) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toLowerCase())
    .replace(/[^a-zA-Z0-9]/g, "") // strip any remaining special chars
}

function generateFigmaFile(mapping: NodeMapping): string {
  const nodeIdDashed = mapping.nodeId.replace(":", "-")
  const figmaUrl = `https://www.figma.com/design/${FILE_KEY}/?node-id=${nodeIdDashed}`

  // Filter out design-only props like State, Theme
  const codeVariants = mapping.variants.filter(
    (v) => !DESIGN_STATES.has(v.name.toLowerCase())
  )

  const hasProps = codeVariants.length > 0

  const propsBlock = codeVariants
    .map((v) => {
      const propName = toCamelCase(v.name)
      const enumEntries = v.values
        .map((val) => `        "${val}": "${val.toLowerCase().replace(/\s+/g, "-")}"`)
        .join(",\n")
      return `      ${propName}: figma.enum("${v.name}", {\n${enumEntries},\n      })`
    })
    .join(",\n")

  const exampleArgs = hasProps
    ? `({ ${codeVariants.map((v) => toCamelCase(v.name)).join(", ")} })`
    : "()"

  const propsSpread = hasProps
    ? codeVariants.map((v) => `${toCamelCase(v.name)}={${toCamelCase(v.name)}}`).join(" ")
    : ""

  return `import figma from "@figma/code-connect"
import { ${mapping.componentName} } from "@/components/ui/${mapping.localFile.split("/").pop()!.replace(".tsx", "")}"

figma.connect(
  ${mapping.componentName},
  "${figmaUrl}",
  {${hasProps ? `\n    props: {\n${propsBlock},\n    },` : ""}
    example: ${exampleArgs} => (
      <${mapping.componentName}${propsSpread ? ` ${propsSpread}` : ""} />
    ),
  }
)
`
}

async function generate(): Promise<void> {
  if (!fs.existsSync(NODES_FILE)) {
    console.error("❌ figma-nodes.json not found. Run --discover first.")
    process.exit(1)
  }

  const mappings: NodeMapping[] = JSON.parse(fs.readFileSync(NODES_FILE, "utf-8"))
  console.log(`\n📝 Generating Code Connect files for ${mappings.length} components...`)

  let created = 0
  let skipped = 0

  for (const mapping of mappings) {
    const outputPath = path.join(
      ROOT,
      mapping.localFile.replace(".tsx", ".figma.tsx")
    )

    // Never overwrite hand-crafted files (check for a marker comment)
    if (fs.existsSync(outputPath)) {
      const existing = fs.readFileSync(outputPath, "utf-8")
      if (existing.includes("// hand-crafted")) {
        skipped++
        continue
      }
    }

    fs.writeFileSync(outputPath, generateFigmaFile(mapping))
    console.log(`   ✓ ${mapping.localFile.replace("src/components/ui/", "").replace(".tsx", ".figma.tsx")}`)
    created++
  }

  console.log(`\n✅ Created ${created} files, skipped ${skipped} hand-crafted files`)
}

// ─── Tokens ───────────────────────────────────────────────────────────────────

const FONT_MAP: Record<string, { package: string; cssName: string }> = {
  "Inter": { package: "@fontsource-variable/inter", cssName: "Inter Variable" },
  "Geist": { package: "@fontsource-variable/geist", cssName: "Geist Variable" },
}

// Figma variable name → [@theme inline var, :root var]
const COLOR_MAP: Array<[string, string, string]> = [
  ["base/background",           "--color-background",           "--background"],
  ["base/foreground",           "--color-foreground",           "--foreground"],
  ["base/card",                 "--color-card",                 "--card"],
  ["base/card-foreground",      "--color-card-foreground",      "--card-foreground"],
  ["base/primary",              "--color-primary",              "--primary"],
  ["base/primary-foreground",   "--color-primary-foreground",   "--primary-foreground"],
  ["base/secondary",            "--color-secondary",            "--secondary"],
  ["base/secondary-foreground", "--color-secondary-foreground", "--secondary-foreground"],
  ["base/muted",                "--color-muted",                "--muted"],
  ["base/muted-foreground",     "--color-muted-foreground",     "--muted-foreground"],
  ["base/destructive",          "--color-destructive",          "--destructive"],
  ["base/border",               "--color-border",               "--border"],
  ["base/ring",                 "--color-ring",                 "--ring"],
]

// Tokens that mirror another source (accent = muted, input = border, popover = background)
const COLOR_MIRRORS: Array<[string, string, string]> = [
  ["base/muted",       "--color-accent",             "--accent"],
  ["base/foreground",  "--color-accent-foreground",  "--accent-foreground"],
  ["base/border",      "--color-input",              "--input"],
  ["base/background",  "--color-popover",            "--popover"],
  ["base/foreground",  "--color-popover-foreground", "--popover-foreground"],
]

function colorToHex(color: { r: number; g: number; b: number }): string {
  const h = (n: number) => Math.round(n * 255).toString(16).padStart(2, "0")
  return `#${h(color.r)}${h(color.g)}${h(color.b)}`
}

function hexToHsl(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  let h = 0, s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  return `hsl(${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`
}

function oklchFromColor(color: { r: number; g: number; b: number; a?: number }): string {
  const { r, g, b, a = 1 } = color
  const toLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  const lr = toLinear(r), lg = toLinear(g), lb = toLinear(b)
  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb
  const l_ = Math.cbrt(l), m_ = Math.cbrt(m), s_ = Math.cbrt(s)
  const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_
  const A = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_
  const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_
  const C = Math.sqrt(A * A + B * B)
  const H = (Math.atan2(B, A) * 180) / Math.PI
  const oL = Math.round(L * 1000) / 1000
  const oC = Math.round(C * 1000) / 1000
  const oH = Math.round(((H % 360) + 360) % 360 * 10) / 10
  return a < 1
    ? `oklch(${oL} ${oC} ${oH} / ${Math.round(a * 100) / 100})`
    : `oklch(${oL} ${oC} ${oH})`
}

function patchVar(css: string, blockRe: RegExp, varName: string, value: string): string {
  return css.replace(blockRe, (block) => {
    const re = new RegExp(`(${varName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*)([^;]+)(;)`)
    return block.replace(re, `$1${value}$3`)
  })
}

async function syncTokens(): Promise<void> {
  console.log("\n🎨 Fetching Figma Variables...")

  let data: FigmaVariables
  try {
    data = (await figmaGet(`/files/${FILE_KEY}/variables/local`)) as FigmaVariables
  } catch (err) {
    console.error("❌ Could not fetch variables (requires Figma Professional/Organization plan):", err)
    return
  }

  const { variables, variableCollections } = data

  // Resolve every variable using its collection's default mode
  const resolved: Record<string, { type: string; value: unknown }> = {}
  for (const variable of Object.values(variables)) {
    const collection = variableCollections[variable.variableCollectionId]
    if (!collection) continue
    const value = variable.valuesByMode[collection.defaultModeId]
    if (value !== undefined) resolved[variable.name] = { type: variable.resolvedType, value }
  }

  let css = fs.readFileSync(INDEX_CSS, "utf-8")
  const changes: string[] = []

  const rootRe = /:root\s*\{[^}]*\}/s

  // ── 1. Font ─────────────────────────────────────────────────────────────────
  const fontName = resolved["font/font-sans"]?.value as string | undefined
  if (fontName && FONT_MAP[fontName]) {
    const { package: pkg, cssName } = FONT_MAP[fontName]
    css = css.replace(/@import "@fontsource-variable\/[^"]+";/, `@import "${pkg}";`)
    css = css.replace(/--font-sans: '[^']+',/, `--font-sans: '${cssName}',`)
    changes.push(`font-sans → ${cssName}`)
  }

  // ── 2. Radius ───────────────────────────────────────────────────────────────
  const radiusPx = resolved["border-radius/rounded-md"]?.value as number | undefined
  if (radiusPx != null) {
    const rem = `${(radiusPx / 16).toFixed(4).replace(/\.?0+$/, "")}rem`
    css = css.replace(/--radius: [\d.]+rem;/g, `--radius: ${rem};`)
    changes.push(`radius → ${rem} (${radiusPx}px)`)
  }

  // ── 3. Colors — update :root only (@theme inline uses var() references) ────
  const allColorEntries = [...COLOR_MAP, ...COLOR_MIRRORS]
  for (const [figmaName, , rootVar] of allColorEntries) {
    const entry = resolved[figmaName]
    if (!entry || entry.type !== "COLOR") continue
    const color = entry.value as { r: number; g: number; b: number; a?: number }
    css = patchVar(css, rootRe, rootVar, oklchFromColor(color))
  }

  // Report changed color tokens (primary entries only, not mirrors)
  for (const [figmaName] of COLOR_MAP) {
    if (resolved[figmaName]?.type === "COLOR") {
      const hex = colorToHex(resolved[figmaName].value as { r: number; g: number; b: number })
      changes.push(`${figmaName} → ${hex}`)
    }
  }

  if (changes.length === 0) {
    console.log("   No changes detected.")
    return
  }

  fs.writeFileSync(INDEX_CSS, css)
  console.log(`\n✅ Updated ${changes.length} token(s) in src/index.css:`)
  for (const c of changes) console.log(`   ✓ ${c}`)
}

// ─── Publish ──────────────────────────────────────────────────────────────────

async function publish(): Promise<void> {
  console.log("\n🚀 Publishing Code Connect to Figma...")
  const token = getToken()
  try {
    execSync(`FIGMA_ACCESS_TOKEN=${token} npx figma connect publish --skip-validation`, {
      cwd: ROOT,
      stdio: "inherit",
    })
    console.log("✅ Published successfully")
  } catch {
    process.exit(1)
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const runAll = args.includes("--all")

if (runAll || args.includes("--discover")) await discover()
if (runAll || args.includes("--generate")) await generate()
if (runAll || args.includes("--tokens")) await syncTokens()
if (runAll || args.includes("--publish")) await publish()

if (args.length === 0) {
  console.log(`
Figma Sync — available flags:
  --discover   Find all Figma component node IDs → writes figma-nodes.json
  --generate   Generate .figma.tsx Code Connect files from figma-nodes.json
  --tokens     Sync Figma Variables to src/index.css
  --publish    Publish Code Connect mappings to Figma
  --all        Run all of the above
`)
}

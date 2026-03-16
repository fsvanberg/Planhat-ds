// =====================================================
// Planhat Lab — Design System Height Rebinder v2
// =====================================================
// Uses variable.consumers to find affected nodes directly
// instead of scanning the entire node tree.
// =====================================================

(async () => {
  figma.notify("🔍 Loading variables...", { timeout: 4000 });

  // ── 1. Load variables ─────────────────────────────────────────────────────
  const allVars = await figma.variables.getLocalVariablesAsync();

  const findVar = (name) => allVars.find(v => v.name === name);

  const h7 = findVar("height/h-7");
  const h8 = findVar("height/h-8");
  const h9 = findVar("height/h-9");

  console.log("Variables found:");
  console.log("  h-7:", h7 ? `✓ (${h7.id})` : "✗ NOT FOUND");
  console.log("  h-8:", h8 ? `✓ (${h8.id})` : "✗ NOT FOUND");
  console.log("  h-9:", h9 ? `✓ (${h9.id})` : "✗ NOT FOUND");

  if (!h7 || !h8) {
    figma.notify("❌ height/h-7 or height/h-8 not found. Check console.", { timeout: 8000 });
    figma.closePlugin();
    return;
  }

  // ── 2. Build remap pairs ──────────────────────────────────────────────────
  const remaps = [
    { from: h8, to: h7, label: "h-8 → h-7 (default)" },
  ];
  if (h9) remaps.push({ from: h9, to: h8, label: "h-9 → h-8 (lg)" });

  // ── 3. Use consumers to find only affected nodes ──────────────────────────
  // variable.consumers returns the exact list of nodes referencing this variable.
  // No tree traversal needed.
  const BOUND_PROPS = ["height", "minHeight", "maxHeight", "width", "minWidth"];

  let updatedCount = 0;
  const log = [];

  figma.notify("⚙️ Rebinding...", { timeout: 30000 });

  for (const { from, to, label } of remaps) {
    console.log(`\nProcessing remap: ${label}`);

    // consumers is an array of { node: BaseNode, fields: string[] }
    const consumers = from.consumers;
    console.log(`  ${consumers.length} consumer(s) found`);

    for (const { node } of consumers) {
      if (!("boundVariables" in node) || !node.boundVariables) continue;

      for (const prop of BOUND_PROPS) {
        const binding = node.boundVariables[prop];
        if (
          binding &&
          binding.type === "VARIABLE_ALIAS" &&
          binding.id === from.id
        ) {
          try {
            node.setBoundVariable(prop, to);
            updatedCount++;
            log.push(`[${node.type}] "${node.name}"  .${prop}:  ${from.name} → ${to.name}`);
          } catch (err) {
            console.warn(`  ⚠ Failed on "${node.name}".${prop}:`, err.message);
          }
        }
      }
    }
  }

  // ── 4. Report ─────────────────────────────────────────────────────────────
  console.log(`\n── Result: ${updatedCount} binding(s) updated ──`);
  log.forEach(l => console.log(" ", l));

  if (updatedCount === 0) {
    figma.notify("ℹ️ 0 bindings updated. Components may already be correct. Check console.", { timeout: 8000 });
  } else {
    figma.notify(`✅ Done — ${updatedCount} binding(s) updated`, { timeout: 6000 });
  }

  figma.closePlugin();
})();

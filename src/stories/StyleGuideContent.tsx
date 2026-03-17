import * as React from 'react'

// ─── Color tokens ─────────────────────────────────────────────────────────────

const NEUTRAL: { step: string; hex: string }[] = [
  { step: '50',  hex: '#fafafa' },
  { step: '100', hex: '#f5f5f5' },
  { step: '200', hex: '#e5e5e5' },
  { step: '300', hex: '#d4d4d4' },
  { step: '400', hex: '#a3a3a3' },
  { step: '500', hex: '#737373' },
  { step: '600', hex: '#525252' },
  { step: '700', hex: '#404040' },
  { step: '800', hex: '#262626' },
  { step: '900', hex: '#171717' },
  { step: '950', hex: '#0a0a0a' },
]

type ColorToken = { name: string; var: string; light: string; dark: string; desc?: string }

const SEMANTIC_SURFACES: ColorToken[] = [
  { name: 'Background',  var: '--background',  light: '#fafafa',  dark: '#0a0a0a',  desc: 'Page / canvas background' },
  { name: 'Card',        var: '--card',         light: '#ffffff',  dark: '#171717',  desc: 'Elevated card surface' },
  { name: 'Popover',     var: '--popover',      light: '#ffffff',  dark: '#171717',  desc: 'Dropdown & tooltip surface' },
]

const SEMANTIC_TEXT: ColorToken[] = [
  { name: 'Foreground',        var: '--foreground',        light: '#0a0a0a', dark: '#fafafa',  desc: 'Default body text' },
  { name: 'Muted Foreground',  var: '--muted-foreground',  light: '#737373', dark: '#a3a3a3',  desc: 'Secondary / de-emphasized text' },
]

const SEMANTIC_INTERACTIVE: ColorToken[] = [
  { name: 'Primary',    var: '--primary',    light: '#171717', dark: '#e5e5e5', desc: 'Main CTAs and filled buttons' },
  { name: 'Secondary',  var: '--secondary',  light: '#f5f5f5', dark: '#262626', desc: 'Secondary actions' },
  { name: 'Muted',      var: '--muted',      light: '#f5f5f5', dark: '#262626', desc: 'Subtle backgrounds for inputs, tabs' },
  { name: 'Accent',     var: '--accent',     light: '#f5f5f5', dark: '#262626', desc: 'Hover & focus highlight' },
  { name: 'Destructive',var: '--destructive',light: '#dc2626', dark: '#f87171', desc: 'Errors and danger states' },
]

const SEMANTIC_CHROME: ColorToken[] = [
  { name: 'Border', var: '--border', light: '#e5e5e5', dark: 'rgba(255,255,255,.10)', desc: 'Default dividers and outlines' },
  { name: 'Input',  var: '--input',  light: '#e5e5e5', dark: 'rgba(255,255,255,.15)', desc: 'Input field borders' },
  { name: 'Ring',   var: '--ring',   light: '#a3a3a3', dark: '#737373',              desc: 'Focus rings' },
]

const SIDEBAR_COLORS: ColorToken[] = [
  { name: 'Sidebar',          var: '--sidebar',                   light: '#fafafa',  dark: '#171717',                    desc: 'Navigation surface' },
  { name: 'Sidebar Primary',  var: '--sidebar-primary',           light: '#171717',  dark: 'oklch(0.488 0.243 264.376)', desc: 'Active nav items' },
  { name: 'Sidebar Accent',   var: '--sidebar-accent',            light: '#f5f5f5',  dark: '#262626',                    desc: 'Hover states' },
  { name: 'Sidebar Border',   var: '--sidebar-border',            light: '#e5e5e5',  dark: 'rgba(255,255,255,.10)',       desc: 'Navigation dividers' },
]

const CHART_COLORS = [
  { name: 'chart-1', value: 'oklch(0.809 0.105 251.813)' },
  { name: 'chart-2', value: 'oklch(0.623 0.214 259.815)' },
  { name: 'chart-3', value: 'oklch(0.546 0.245 262.881)' },
  { name: 'chart-4', value: 'oklch(0.488 0.243 264.376)' },
  { name: 'chart-5', value: 'oklch(0.424 0.199 265.638)' },
]

const NEUTRAL_MAPPING: { token: string; light: string; dark: string }[] = [
  { token: '--background',      light: 'neutral-50',  dark: 'neutral-950' },
  { token: '--foreground',      light: 'neutral-950', dark: 'neutral-50' },
  { token: '--card',            light: 'white',       dark: 'neutral-900' },
  { token: '--primary',         light: 'neutral-900', dark: 'neutral-200' },
  { token: '--secondary',       light: 'neutral-100', dark: 'neutral-800' },
  { token: '--muted',           light: 'neutral-100', dark: 'neutral-800' },
  { token: '--muted-foreground',light: 'neutral-500', dark: 'neutral-400' },
  { token: '--accent',          light: 'neutral-100', dark: 'neutral-800' },
  { token: '--border',          light: 'neutral-200', dark: 'white/10%' },
  { token: '--input',           light: 'neutral-200', dark: 'white/15%' },
  { token: '--ring',            light: 'neutral-400', dark: 'neutral-500' },
]

// ─── Typography tokens ────────────────────────────────────────────────────────

const TYPE_SCALE: { label: string; size: string; lh: string; weight: number; usage: string }[] = [
  { label: '2xl',  size: '1.5rem',    lh: '2rem',    weight: 600, usage: 'Section headings' },
  { label: 'xl',   size: '1.25rem',   lh: '1.75rem', weight: 600, usage: 'Sub-headings' },
  { label: 'lg',   size: '1.125rem',  lh: '1.75rem', weight: 400, usage: 'Lead text' },
  { label: 'base', size: '1rem',      lh: '1.5rem',  weight: 400, usage: 'Body text (14px base)' },
  { label: 'sm',   size: '0.8125rem', lh: '1.25rem', weight: 400, usage: 'Labels / secondary' },
  { label: 'xs',   size: '0.75rem',   lh: '1rem',    weight: 400, usage: 'Captions / badges' },
]

const WEIGHTS = [
  { label: 'Regular',  value: 400 },
  { label: 'Medium',   value: 500 },
  { label: 'Semibold', value: 600 },
]

// ─── Radius tokens ────────────────────────────────────────────────────────────

const RADII: { label: string; var: string; px: string; tw: string }[] = [
  { label: 'sm',   var: '--radius-sm',  px: '6px',    tw: 'rounded-sm' },
  { label: 'md',   var: '--radius-md',  px: '8px',    tw: 'rounded-md' },
  { label: 'lg',   var: '--radius-lg',  px: '10px',   tw: 'rounded-lg' },
  { label: 'xl',   var: '--radius-xl',  px: '14px',   tw: 'rounded-xl' },
  { label: '2xl',  var: '--radius-2xl', px: '~18px',  tw: 'rounded-2xl' },
  { label: 'full', var: '',             px: '9999px',  tw: 'rounded-full' },
]

// ─── Shadow tokens ────────────────────────────────────────────────────────────

const SHADOWS: { label: string; tw: string; css: string }[] = [
  { label: 'xs',  tw: 'shadow-xs',  css: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { label: 'sm',  tw: 'shadow-sm',  css: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
  { label: 'md',  tw: 'shadow-md',  css: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { label: 'lg',  tw: 'shadow-lg',  css: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { label: 'xl',  tw: 'shadow-xl',  css: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { label: '2xl', tw: 'shadow-2xl', css: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
]

const INSET_SHADOWS: { label: string; tw: string }[] = [
  { label: 'xs', tw: 'inset-shadow-xs' },
  { label: 'sm', tw: 'inset-shadow-sm' },
  { label: 'md', tw: 'inset-shadow-md' },
]

const BLURS: { label: string; tw: string; value: string }[] = [
  { label: 'sm',  tw: 'blur-sm',  value: 'blur(4px)' },
  { label: 'md',  tw: 'blur-md',  value: 'blur(12px)' },
  { label: 'lg',  tw: 'blur-lg',  value: 'blur(16px)' },
  { label: 'xl',  tw: 'blur-xl',  value: 'blur(24px)' },
  { label: '2xl', tw: 'blur-2xl', value: 'blur(40px)' },
  { label: '3xl', tw: 'blur-3xl', value: 'blur(64px)' },
]

const BACKDROP_BLURS: { label: string; tw: string; value: string }[] = [
  { label: 'sm',  tw: 'backdrop-blur-sm',  value: 'blur(4px)' },
  { label: 'md',  tw: 'backdrop-blur-md',  value: 'blur(12px)' },
  { label: 'lg',  tw: 'backdrop-blur-lg',  value: 'blur(16px)' },
  { label: 'xl',  tw: 'backdrop-blur-xl',  value: 'blur(24px)' },
  { label: '2xl', tw: 'backdrop-blur-2xl', value: 'blur(40px)' },
]

// ─── Breakpoints & Container ──────────────────────────────────────────────────

const BREAKPOINTS: { name: string; px: number; container: string }[] = [
  { name: 'sm',  px: 640,  container: '640px' },
  { name: 'md',  px: 768,  container: '768px' },
  { name: 'lg',  px: 1024, container: '1024px' },
  { name: 'xl',  px: 1280, container: '1280px' },
  { name: '2xl', px: 1536, container: '1536px' },
]

// ─── Spacing tokens ───────────────────────────────────────────────────────────

const SPACING: { token: string; var: string; px: string }[] = [
  { token: '1',   var: '--spacing-1',   px: '4px' },
  { token: '1.5', var: '--spacing-1-5', px: '6px' },
  { token: '2',   var: '--spacing-2',   px: '8px' },
  { token: '2.5', var: '--spacing-2-5', px: '10px' },
  { token: '3',   var: '--spacing-3',   px: '12px' },
  { token: '4',   var: '--spacing-4',   px: '16px' },
  { token: '5',   var: '--spacing-5',   px: '20px' },
  { token: '6',   var: '--spacing-6',   px: '24px' },
]

// ─── Shared styles ────────────────────────────────────────────────────────────

const s = {
  page: {
    padding: '2.5rem',
    maxWidth: 1080,
    margin: '0 auto',
    background: 'var(--background)',
    color: 'var(--foreground)',
    minHeight: '100vh',
    fontFamily: 'var(--font-sans, sans-serif)',
    fontSize: '0.875rem',
  } as React.CSSProperties,
  h1: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
  } as React.CSSProperties,
  lead: {
    color: 'var(--muted-foreground)',
    marginBottom: '3rem',
    fontSize: '0.875rem',
  } as React.CSSProperties,
  section: {
    marginBottom: '3rem',
  } as React.CSSProperties,
  h2: {
    fontSize: '0.8125rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    color: 'var(--muted-foreground)',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid var(--border)',
  } as React.CSSProperties,
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
  } as React.CSSProperties,
  row: {
    display: 'grid',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.4rem 0',
    borderBottom: '1px solid var(--border)',
  } as React.CSSProperties,
  label: {
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    color: 'var(--foreground)',
    fontWeight: 500,
  } as React.CSSProperties,
  muted: {
    fontSize: '0.6875rem',
    color: 'var(--muted-foreground)',
    fontFamily: 'monospace',
  } as React.CSSProperties,
  swatch: (bg: string): React.CSSProperties => ({
    width: 28,
    height: 28,
    borderRadius: 6,
    background: bg,
    border: '1px solid var(--border)',
    flexShrink: 0,
  }),
}

// ─── Section components ───────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={s.section}>
      <h2 style={s.h2}>{title}</h2>
      {children}
    </section>
  )
}

function ColorTokenGrid({ tokens }: { tokens: ColorToken[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
      {tokens.map(c => (
        <div key={c.var} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.5rem 0.75rem' }}>
          <div style={s.swatch(c.light)} title={`Light: ${c.light}`} />
          <div style={{ ...s.swatch(c.dark), opacity: 0.85 }} title={`Dark: ${c.dark}`} />
          <div>
            <div style={s.label}>{c.name}</div>
            <code style={s.muted}>{c.var}</code>
            {c.desc && <div style={{ ...s.muted, marginTop: 1 }}>{c.desc}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

function ColorsSection() {
  return (
    <>
      <Section title="Surfaces">
        <ColorTokenGrid tokens={SEMANTIC_SURFACES} />
      </Section>

      <Section title="Text">
        <ColorTokenGrid tokens={SEMANTIC_TEXT} />
      </Section>

      <Section title="Interactive">
        <ColorTokenGrid tokens={SEMANTIC_INTERACTIVE} />
      </Section>

      <Section title="UI Chrome">
        <ColorTokenGrid tokens={SEMANTIC_CHROME} />
      </Section>

      <Section title="Neutral Scale">
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {NEUTRAL.map(n => (
            <div key={n.step} style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, background: n.hex, border: '1px solid var(--border)', marginBottom: 4 }} />
              <div style={{ fontSize: '0.6875rem', color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>{n.step}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>{n.hex}</div>
            </div>
          ))}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', fontFamily: 'monospace' }}>
            <thead>
              <tr>
                {['Token', 'Light', 'Dark'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--border)', color: 'var(--muted-foreground)', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NEUTRAL_MAPPING.map(row => (
                <tr key={row.token}>
                  <td style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--border)', color: 'var(--foreground)' }}>{row.token}</td>
                  <td style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--border)', color: 'var(--muted-foreground)' }}>{row.light}</td>
                  <td style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--border)', color: 'var(--muted-foreground)' }}>{row.dark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Data Visualization">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {CHART_COLORS.map((c, i) => (
            <div key={c.name} style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 10, background: `var(--chart-${i + 1})`, border: '1px solid var(--border)', marginBottom: 4 }} />
              <div style={{ fontSize: '0.6875rem', color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>chart-{i + 1}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sidebar">
        <ColorTokenGrid tokens={SIDEBAR_COLORS} />
      </Section>
    </>
  )
}

function TypographySection() {
  return (
    <>
      <Section title="Font Family">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {WEIGHTS.map(w => (
            <div key={w.value} style={{ ...s.row, gridTemplateColumns: '100px 1fr 60px', borderBottom: '1px solid var(--border)' }}>
              <code style={s.label}>{w.label}</code>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: w.value }}>
                Inter Variable — The quick brown fox
              </div>
              <code style={s.muted}>{w.value}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Type Scale">
        <div>
          {TYPE_SCALE.map(t => (
            <div key={t.label} style={{ ...s.row, gridTemplateColumns: '80px 1fr 140px', borderBottom: '1px solid var(--border)' }}>
              <div>
                <code style={s.label}>text-{t.label}</code>
                <div style={s.muted}>{t.size}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: t.size, lineHeight: t.lh, fontWeight: t.weight, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={s.muted}>{t.usage}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

function RadiusSection() {
  return (
    <Section title="Border Radius">
      <div>
        {RADII.map(r => (
          <div key={r.label} style={{ ...s.row, gridTemplateColumns: '60px 48px 120px 1fr', borderBottom: '1px solid var(--border)' }}>
            <code style={s.label}>{r.label}</code>
            <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: r.var ? `var(${r.var})` : r.label === 'full' ? '9999px' : '0' }} />
            <code style={s.muted}>{r.var || '9999px'}</code>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={s.muted}>{r.px}</span>
              <code style={s.muted}>{r.tw}</code>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ShadowsSection() {
  return (
    <>
      <Section title="Box Shadow">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {SHADOWS.map(sh => (
            <div key={sh.label} style={{ padding: '1.5rem', borderRadius: 10, background: 'var(--card)', boxShadow: sh.css }}>
              <code style={{ ...s.label, display: 'block', marginBottom: 4 }}>{sh.tw}</code>
              <span style={s.muted}>shadow-{sh.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Inset Shadow">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {INSET_SHADOWS.map(sh => (
            <div key={sh.label} style={{ padding: '1.5rem', borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)', boxShadow: `inset 0 1px 3px 0 rgb(0 0 0 / 0.${sh.label === 'xs' ? '06' : sh.label === 'sm' ? '1' : '15'})` }}>
              <code style={{ ...s.label, display: 'block', marginBottom: 4 }}>{sh.tw}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Backdrop Blur">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
          {BACKDROP_BLURS.map(b => (
            <div key={b.label} style={{ position: 'relative', height: 80, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--primary) 0%, var(--muted-foreground) 100%)', opacity: 0.25 }} />
              <div style={{ position: 'absolute', inset: 0, backdropFilter: b.value, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <code style={s.label}>{b.tw}</code>
                <span style={s.muted}>{b.value}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

function BreakpointsSection() {
  const max = 1536
  return (
    <>
      <Section title="Breakpoints">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {BREAKPOINTS.map((bp) => {
            const pct = (bp.px / max) * 100
            return (
              <div key={bp.name}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 8, paddingBottom: 4 }}>
                  <code style={{ ...s.label, width: 32, flexShrink: 0 }}>{bp.name}</code>
                  <code style={{ ...s.muted, width: 56, flexShrink: 0 }}>{bp.px}px</code>
                  <div style={{ flex: 1, position: 'relative', height: 20 }}>
                    {/* Track */}
                    <div style={{ position: 'absolute', inset: 0, background: 'var(--muted)', borderRadius: 3 }} />
                    {/* Fill */}
                    <div style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      width: `${pct}%`,
                      background: 'var(--primary)',
                      opacity: 0.12,
                      borderRadius: 3,
                    }} />
                    {/* Breakpoint marker */}
                    <div style={{
                      position: 'absolute',
                      left: `${pct}%`,
                      top: 0, bottom: 0,
                      width: 2,
                      background: 'var(--primary)',
                      opacity: 0.5,
                      transform: 'translateX(-1px)',
                    }} />
                  </div>
                </div>
              </div>
            )
          })}
          {/* Scale labels */}
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 98, flexShrink: 0 }} />
            <div style={{ flex: 1, position: 'relative', height: 16 }}>
              {BREAKPOINTS.map((bp) => {
                const pct = (bp.px / max) * 100
                return (
                  <span key={bp.name} style={{
                    position: 'absolute',
                    left: `${pct}%`,
                    transform: 'translateX(-50%)',
                    fontSize: '0.625rem',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'monospace',
                    whiteSpace: 'nowrap',
                  }}>
                    {bp.px}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Container Max-Width">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingBottom: 4 }}>
          {BREAKPOINTS.map((bp) => {
            const pct = (bp.px / max) * 100
            return (
              <div
                key={bp.name}
                style={{
                  width: `${pct}%`,
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  padding: '0.4rem 0.75rem',
                  background: 'var(--card)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 8,
                  minWidth: 100,
                }}
              >
                <code style={s.label}>@{bp.name}</code>
                <code style={s.muted}>{bp.container}</code>
              </div>
            )
          })}
        </div>
      </Section>
    </>
  )
}

function SpacingSection() {
  return (
    <Section title="Spacing Tokens">
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 120px 60px 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {['Token', 'Var', 'px', 'Visual'].map(h => (
            <span key={h} style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted-foreground)' }}>{h}</span>
          ))}
        </div>
        {SPACING.map(sp => (
          <div key={sp.token} style={{ ...s.row, gridTemplateColumns: '60px 120px 60px 1fr', borderBottom: '1px solid var(--border)' }}>
            <code style={s.label}>{sp.token}</code>
            <code style={s.muted}>{sp.var}</code>
            <span style={s.muted}>{sp.px}</span>
            <div style={{ height: 8, background: 'var(--primary)', borderRadius: 4, width: `var(${sp.var})`, maxWidth: '100%', opacity: 0.7 }} />
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function StyleGuidePage() {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>Style Guide</h1>
      <p style={s.lead}>
        Design tokens, type scale, spacing, shadows, and breakpoints — all derived from{' '}
        <code style={{ fontFamily: 'monospace' }}>src/tokens/tokens.json</code> and{' '}
        <code style={{ fontFamily: 'monospace' }}>src/index.css</code>.
      </p>

      <ColorsSection />
      <TypographySection />
      <RadiusSection />
      <ShadowsSection />
      <BreakpointsSection />
      <SpacingSection />
    </div>
  )
}


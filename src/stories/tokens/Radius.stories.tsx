import type { Meta, StoryObj } from '@storybook/react-vite'

// ── Radius tokens ─────────────────────────────────────────────────────────────
// Base: --radius = 0.5rem (8px)
// Scale is calculated from the base in index.css

type RadiusToken = {
  label: string
  cssVar: string
  formula: string
  approx: string
  tailwindClass: string
}

const RADIUS_SCALE: RadiusToken[] = [
  { label: 'None',    cssVar: '',              formula: '0',                    approx: '0px',    tailwindClass: 'rounded-none' },
  { label: 'sm',     cssVar: '--radius-sm',   formula: 'radius × 0.6',         approx: '~5px',   tailwindClass: 'rounded-sm' },
  { label: 'md',     cssVar: '--radius-md',   formula: 'radius × 0.8',         approx: '~6px',   tailwindClass: 'rounded-md' },
  { label: 'lg',     cssVar: '--radius-lg',   formula: 'radius (base)',         approx: '8px',    tailwindClass: 'rounded-lg' },
  { label: 'xl',     cssVar: '--radius-xl',   formula: 'radius × 1.4',         approx: '~11px',  tailwindClass: 'rounded-xl' },
  { label: '2xl',    cssVar: '--radius-2xl',  formula: 'radius × 1.8',         approx: '~14px',  tailwindClass: 'rounded-2xl' },
  { label: '3xl',    cssVar: '--radius-3xl',  formula: 'radius × 2.2',         approx: '~18px',  tailwindClass: 'rounded-3xl' },
  { label: '4xl',    cssVar: '--radius-4xl',  formula: 'radius × 2.6',         approx: '~21px',  tailwindClass: 'rounded-4xl' },
  { label: 'full',   cssVar: '',              formula: '9999px',               approx: '9999px', tailwindClass: 'rounded-full' },
]

// ── Spacing scale (Tailwind default) ─────────────────────────────────────────

type SpacingStep = { label: string; rem: string; px: string }

const SPACING_SCALE: SpacingStep[] = [
  { label: '0',   rem: '0',       px: '0px' },
  { label: '0.5', rem: '0.125rem',px: '2px' },
  { label: '1',   rem: '0.25rem', px: '4px' },
  { label: '1.5', rem: '0.375rem',px: '6px' },
  { label: '2',   rem: '0.5rem',  px: '8px' },
  { label: '2.5', rem: '0.625rem',px: '10px' },
  { label: '3',   rem: '0.75rem', px: '12px' },
  { label: '3.5', rem: '0.875rem',px: '14px' },
  { label: '4',   rem: '1rem',    px: '16px' },
  { label: '5',   rem: '1.25rem', px: '20px' },
  { label: '6',   rem: '1.5rem',  px: '24px' },
  { label: '8',   rem: '2rem',    px: '32px' },
  { label: '10',  rem: '2.5rem',  px: '40px' },
  { label: '12',  rem: '3rem',    px: '48px' },
  { label: '16',  rem: '4rem',    px: '64px' },
  { label: '20',  rem: '5rem',    px: '80px' },
  { label: '24',  rem: '6rem',    px: '96px' },
]

// ── Components ────────────────────────────────────────────────────────────────

function RadiusRow({ token }: { token: RadiusToken }) {
  const radius = token.cssVar ? `var(${token.cssVar})` : token.label === 'None' ? '0' : '9999px'
  const computed = token.cssVar && typeof window !== 'undefined'
    ? getComputedStyle(document.documentElement).getPropertyValue(token.cssVar).trim()
    : undefined

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '60px 48px 1fr 160px',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.5rem 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <code style={{ fontSize: 12, color: 'var(--foreground)', fontFamily: 'monospace', fontWeight: 600 }}>
        {token.label}
      </code>
      <div style={{
        width: 40,
        height: 40,
        background: 'var(--primary)',
        borderRadius: radius,
        flexShrink: 0,
      }} />
      <div>
        <code style={{ fontSize: 11, color: 'var(--muted-foreground)', fontFamily: 'monospace', display: 'block' }}>
          {token.cssVar || (token.label === 'None' ? '0' : '9999px')}
        </code>
        {computed && (
          <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{computed} computed</span>
        )}
        <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'block' }}>{token.formula}</span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>
        {token.approx} · <code style={{ fontFamily: 'monospace' }}>{token.tailwindClass}</code>
      </div>
    </div>
  )
}

function SpacingRow({ step }: { step: SpacingStep }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '48px 80px 60px 1fr',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.35rem 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <code style={{ fontSize: 12, color: 'var(--foreground)', fontFamily: 'monospace', fontWeight: 600 }}>
        {step.label}
      </code>
      <code style={{ fontSize: 11, color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>{step.rem}</code>
      <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{step.px}</span>
      <div style={{
        height: 8,
        background: 'var(--primary)',
        borderRadius: 2,
        opacity: 0.7,
        width: step.rem === '0' ? 2 : `calc(${step.rem} * (100% / 6rem))`,
        maxWidth: '100%',
      }} />
    </div>
  )
}

function ScalingPage() {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: 700,
      background: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh',
      fontFamily: 'var(--font-sans, sans-serif)',
    }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Radius & Spacing</h1>
      <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem', fontSize: 14 }}>
        Radius tokens derive from a single base (<code style={{ fontFamily: 'monospace' }}>--radius: 0.5rem</code>).
        Spacing follows the standard Tailwind rem scale (base: 1rem = 16px).
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: '0.75rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--border)' }}>
          Border Radius
        </h2>
        {RADIUS_SCALE.map(t => <RadiusRow key={t.label} token={t} />)}
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: '0.75rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--border)' }}>
          Base Radius Token
        </h2>
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          padding: '1rem 1.25rem',
          fontSize: 13,
          color: 'var(--foreground)',
          fontFamily: 'monospace',
        }}>
          <div style={{ marginBottom: 4 }}>
            <span style={{ color: 'var(--muted-foreground)' }}>/* index.css */ </span>
          </div>
          <div><span style={{ color: 'var(--primary)', fontWeight: 600 }}>--radius</span>: 0.5rem; <span style={{ color: 'var(--muted-foreground)' }}>/* 8px */</span></div>
          <div style={{ marginTop: 8 }}>
            <div>--radius-sm:  calc(var(--radius) * 0.6);  <span style={{ color: 'var(--muted-foreground)' }}>/* ~5px */</span></div>
            <div>--radius-md:  calc(var(--radius) * 0.8);  <span style={{ color: 'var(--muted-foreground)' }}>/* ~6px */</span></div>
            <div>--radius-lg:  var(--radius);               <span style={{ color: 'var(--muted-foreground)' }}>/* 8px */</span></div>
            <div>--radius-xl:  calc(var(--radius) * 1.4);  <span style={{ color: 'var(--muted-foreground)' }}>/* ~11px */</span></div>
            <div>--radius-2xl: calc(var(--radius) * 1.8);  <span style={{ color: 'var(--muted-foreground)' }}>/* ~14px */</span></div>
          </div>
        </div>
        <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginTop: 8 }}>
          Change the base <code style={{ fontFamily: 'monospace' }}>--radius</code> to rescale the entire system proportionally.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: '0.75rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--border)' }}>
          Spacing Scale
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '48px 80px 60px 1fr', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted-foreground)' }}>Step</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted-foreground)' }}>rem</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted-foreground)' }}>px</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted-foreground)' }}>Visual</span>
        </div>
        {SPACING_SCALE.map(s => <SpacingRow key={s.label} step={s} />)}
      </section>
    </div>
  )
}

const meta = {
  title: 'Foundations/Radius & Spacing',
  component: ScalingPage,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
} satisfies Meta<typeof ScalingPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

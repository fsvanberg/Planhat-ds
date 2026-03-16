import type { Meta, StoryObj } from '@storybook/react-vite'

// ── Type scale ────────────────────────────────────────────────────────────────
// Tailwind v4 defaults + custom overrides from index.css

type TypeStep = {
  label: string
  cssVar?: string
  size: string
  lineHeight: string
  usage: string
}

const TYPE_SCALE: TypeStep[] = [
  { label: '4xl',   size: '2.25rem',   lineHeight: '2.5rem',    usage: 'Display / hero headings' },
  { label: '3xl',   size: '1.875rem',  lineHeight: '2.25rem',   usage: 'Page headings' },
  { label: '2xl',   size: '1.5rem',    lineHeight: '2rem',      usage: 'Section headings' },
  { label: 'xl',    size: '1.25rem',   lineHeight: '1.75rem',   usage: 'Sub-headings' },
  { label: 'lg',    size: '1.125rem',  lineHeight: '1.75rem',   usage: 'Lead text / callouts' },
  { label: 'base',  size: '1rem',      lineHeight: '1.5rem',    usage: 'Body text' },
  { label: 'sm',    cssVar: '--font-size-sm', size: '0.8125rem', lineHeight: '1.25rem', usage: 'Secondary body / labels' },
  { label: 'xs',    cssVar: '--font-size-xs', size: '0.75rem',   lineHeight: '1rem',    usage: 'Captions / badges / meta' },
]

const FONT_WEIGHTS = [
  { label: 'Regular',   value: 400 },
  { label: 'Medium',    value: 500 },
  { label: 'Semibold',  value: 600 },
  { label: 'Bold',      value: 700 },
]

function ScaleRow({ step }: { step: TypeStep }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr 160px',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <div>
        <code style={{ fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>
          text-{step.label}
        </code>
        <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginTop: 2, fontFamily: 'monospace' }}>
          {step.size} / {step.lineHeight}
        </div>
      </div>
      <div
        style={{
          fontSize: step.size,
          lineHeight: step.lineHeight,
          color: 'var(--foreground)',
          fontFamily: 'var(--font-sans, sans-serif)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{step.usage}</div>
    </div>
  )
}

function WeightRow({ weight }: { weight: typeof FONT_WEIGHTS[number] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '100px 1fr',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.5rem 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <div>
        <code style={{ fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>
          font-{weight.label.toLowerCase()}
        </code>
        <div style={{ fontSize: 11, color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>{weight.value}</div>
      </div>
      <div
        style={{
          fontSize: '1rem',
          fontWeight: weight.value,
          color: 'var(--foreground)',
          fontFamily: 'var(--font-sans, sans-serif)',
        }}
      >
        Inter Variable — {weight.label}
      </div>
    </div>
  )
}

function TypographyPage() {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: 800,
      background: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh',
      fontFamily: 'var(--font-sans, sans-serif)',
    }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Typography</h1>
      <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem', fontSize: 14 }}>
        Font family: <code style={{ fontFamily: 'monospace' }}>Inter Variable</code> (variable font, loaded via{' '}
        <code style={{ fontFamily: 'monospace' }}>@fontsource-variable/inter</code>).
        Sizes and weights follow the Tailwind v4 scale with custom <code style={{ fontFamily: 'monospace' }}>sm</code> and{' '}
        <code style={{ fontFamily: 'monospace' }}>xs</code> overrides.
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: '0.75rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--border)' }}>
          Type Scale
        </h2>
        {TYPE_SCALE.map(step => <ScaleRow key={step.label} step={step} />)}
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: '0.75rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--border)' }}>
          Font Weights
        </h2>
        {FONT_WEIGHTS.map(w => <WeightRow key={w.value} weight={w} />)}
      </section>

      <section>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: '0.75rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--border)' }}>
          In Context
        </h2>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '1.5rem' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
            Label
          </p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '2rem', color: 'var(--foreground)', marginBottom: 8 }}>
            Card Title
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.5rem', color: 'var(--foreground)', marginBottom: 8 }}>
            Body text at base size. Used for main content, descriptions, and paragraph copy throughout the interface.
          </p>
          <p style={{ fontSize: '0.8125rem', lineHeight: '1.25rem', color: 'var(--muted-foreground)' }}>
            Secondary text at sm size — metadata, helper text, timestamps, and supporting detail.
          </p>
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Foundations/Typography',
  component: TypographyPage,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
} satisfies Meta<typeof TypographyPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

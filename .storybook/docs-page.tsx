import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks'

export function DocsPage() {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '2rem 0 0.75rem' }}>Props</h3>
      <Controls />
      <Stories />
    </>
  )
}

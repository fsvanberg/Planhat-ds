import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from '@/components/ui/combobox'

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    docs: {
      description: {
        component: 'An autocomplete combobox built on Base UI. Type to filter, click to select.',
      },
    },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = ['Next.js', 'Remix', 'Astro', 'SvelteKit', 'Nuxt.js', 'Gatsby', 'Expo', 'Vite']

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select framework…" className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw} value={fw}>{fw}</ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select language…" className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No language found.</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>Frontend</ComboboxLabel>
            <ComboboxItem value="typescript">TypeScript</ComboboxItem>
            <ComboboxItem value="javascript">JavaScript</ComboboxItem>
            <ComboboxItem value="css">CSS</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Backend</ComboboxLabel>
            <ComboboxItem value="python">Python</ComboboxItem>
            <ComboboxItem value="go">Go</ComboboxItem>
            <ComboboxItem value="rust">Rust</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const WithClear: Story = {
  render: () => (
    <Combobox defaultValue="Next.js">
      <ComboboxInput placeholder="Select framework…" className="w-56" showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw} value={fw}>{fw}</ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

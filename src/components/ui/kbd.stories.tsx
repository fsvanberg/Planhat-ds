import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Renders a keyboard key or shortcut in a styled badge. Use a single `Kbd` for one key and wrap multiple keys in `KbdGroup` to display a combination.',
      },
    },
  },
  args: {
    children: '⌘K',
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SingleKey: Story = {
  args: { children: 'Enter' },
}

export const Combination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const ShiftCombination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
}

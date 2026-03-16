import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from '@/components/ui/toggle'
import { BoldIcon } from 'lucide-react'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A two-state toggle button built on Base UI. Use `pressed` / `defaultPressed` to control state, `variant` for visual style, and `size` to fit the surrounding layout.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Toggle',
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
  ),
}

export const Pressed: Story = {
  args: { pressed: true },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

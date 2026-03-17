import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within, expect } from 'storybook/test'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A clickable button built on Base UI. Use `variant` to communicate intent (default, secondary, destructive, outline, ghost, link) and `size` to match the surrounding context.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs', '2xs', 'icon', 'icon-sm', 'icon-xs', 'icon-2xs'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: /button/i })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: /button/i }))
  },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Link: Story = {
  args: { variant: 'link' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, children: 'Invalid' },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="2xs">XSmall</Button>
      <Button size="xs">Small</Button>
      <Button size="sm">Default</Button>
      <Button size="default">Large</Button>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="icon-2xs" aria-label="icon-2xs">+</Button>
      <Button size="icon-xs" aria-label="icon-xs">+</Button>
      <Button size="icon-sm" aria-label="icon-sm">+</Button>
      <Button size="icon" aria-label="icon">+</Button>
    </div>
  ),
}

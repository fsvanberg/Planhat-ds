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
        component: 'A clickable button built on Base UI. Use `variant` to communicate intent and `size` to match the surrounding context. Pass `loading` to show a spinner and disable interaction.',
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
      options: ['xs', 'sm', 'default', 'lg', 'icon-xs', 'icon-sm', 'icon', 'icon-lg'],
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

export const Loading: Story = {
  args: { loading: true, children: 'Loading' },
}

export const LoadingIcon: Story = {
  args: { loading: true, size: 'icon', 'aria-label': 'loading', children: undefined },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="default">default</Button>
      <Button size="lg">lg</Button>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="icon-xs" aria-label="icon-xs">+</Button>
      <Button size="icon-sm" aria-label="icon-sm">+</Button>
      <Button size="icon" aria-label="icon">+</Button>
      <Button size="icon-lg" aria-label="icon-lg">+</Button>
    </div>
  ),
}

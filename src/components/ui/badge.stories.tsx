import type { Meta, StoryObj } from '@storybook/react-vite'
import { BadgeCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A small inline label for status, category, or count. Choose a `variant` to communicate semantic meaning — use `destructive` for errors, `secondary` for neutral tags, `outline` for lower-emphasis labels, and `verified` for trust/identity signals.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'verified'],
    },
  },
  args: {
    variant: 'default',
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
}

export const Verified: Story = {
  args: { variant: 'verified' },
  render: (args) => (
    <Badge {...args}>
      <BadgeCheck />
      Verified
    </Badge>
  ),
}

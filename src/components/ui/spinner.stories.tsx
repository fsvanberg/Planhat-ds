import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An animated loading indicator for indeterminate wait states. Size it with Tailwind `size-*` utilities; use it inline alongside text or centered in a container to indicate background activity.',
      },
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

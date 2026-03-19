import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '@/components/ui/skeleton'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An animated placeholder that mimics the shape of loading content. Use it to reduce layout shift during data fetching by matching the dimensions of the content it replaces.',
      },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'h-4 w-64',
  },
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-36" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Skeleton className="h-40 w-full rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  ),
}

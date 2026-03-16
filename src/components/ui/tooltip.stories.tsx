import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A short text label that appears on hover or focus to describe an action or element. Wrap your app in `TooltipProvider` to enable tooltips; use `side` to control placement.',
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-12">
      {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" className="w-24 capitalize">{side}</Button>} />
          <TooltipContent side={side}>
            <p>Tooltip — {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

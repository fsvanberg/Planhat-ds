import type { Meta, StoryObj } from '@storybook/react-vite'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    docs: {
      description: {
        component: 'A floating card that appears on hover for previewing supplementary information without navigating away. Use it for user profiles, link previews, or any context that enriches but does not block the main flow.',
      },
    },
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@nextjs</Button>} />
      <HoverCardContent>
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

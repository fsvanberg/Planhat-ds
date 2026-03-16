import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toast notification system powered by Sonner. Mount `Toaster` once at the app root and trigger toasts anywhere via the `toast()` API; supports default, success, error, warning, and info variants.',
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toaster />
      <Button variant="outline" onClick={() => toast('Event has been created')}>
        Show Toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Profile updated successfully')}>
        Success Toast
      </Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
        Error Toast
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Please review your input')}>
        Warning Toast
      </Button>
      <Button variant="outline" onClick={() => toast.info('Your session will expire soon')}>
        Info Toast
      </Button>
    </div>
  ),
}

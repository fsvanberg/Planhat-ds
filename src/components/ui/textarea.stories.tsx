import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line text input that auto-sizes to its content. Supports `disabled` and `aria-invalid` states, and composes inside an `InputGroup` for block-aligned addons.',
      },
    },
  },
  args: {
    placeholder: 'Type your message here.',
    className: 'w-80',
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid textarea',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-80 gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}

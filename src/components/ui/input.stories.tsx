import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within, expect } from 'storybook/test'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A single-line text input built on Base UI. Supports `disabled` and `aria-invalid` states, multiple input types, and composing inside an `InputGroup` for addons.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'file'],
    },
  },
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'Hello')
    await expect(input).toHaveValue('Hello')
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
  },
}

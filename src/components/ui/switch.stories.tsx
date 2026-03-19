import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within, expect } from 'storybook/test'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle switch built on Base UI for binary on/off settings. Available in `default` and `sm` sizes; supports `disabled` and `aria-invalid` states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole('switch')
    await expect(switchEl).not.toBeChecked()
    await userEvent.click(switchEl)
    await expect(switchEl).toBeChecked()
  },
}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

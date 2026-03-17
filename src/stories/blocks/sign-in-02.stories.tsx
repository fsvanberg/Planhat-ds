import type { Meta, StoryObj } from '@storybook/react-vite'
import { SignIn02 } from '@/components/blocks/sign-in-02'

const meta = {
  title: 'Blocks/Sign In 02',
  component: SignIn02,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignIn02>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

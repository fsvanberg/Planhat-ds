import type { Meta, StoryObj } from '@storybook/react-vite'
import { SignIn06 } from '@/components/blocks/sign-in-06'

const meta = {
  title: 'Blocks/Sign In 06',
  component: SignIn06,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignIn06>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

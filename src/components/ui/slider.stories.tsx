import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A range slider built on Base UI for selecting a numeric value or range. Supports single and dual thumbs, horizontal and vertical orientations, custom step intervals, and a `disabled` state.',
      },
    },
  },
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-64',
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: 'h-40',
    defaultValue: [50],
  },
}

export const Stepped: Story = {
  args: {
    step: 10,
    defaultValue: [40],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: [50],
  },
}

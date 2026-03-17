import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A horizontal progress bar for showing deterministic task completion. Use `value` (0–100) to set fill; add `ProgressLabel` and `ProgressValue` children for a labelled layout.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Completion percentage (0–100)',
    },
    className: { table: { disable: true } },
  },
  args: {
    value: 60,
    className: 'w-80',
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <Progress {...args}>
      <ProgressLabel>Loading...</ProgressLabel>
      <ProgressValue>{args.value}%</ProgressValue>
    </Progress>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Progress value={0} />
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),
}

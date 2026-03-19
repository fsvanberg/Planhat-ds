import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A thin visual divider for separating sections of content. Use `orientation` to render it horizontally between stacked items or vertically between inline items.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: () => <Separator className="w-64" />,
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: () => <Separator orientation="vertical" className="h-16" />,
}

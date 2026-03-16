import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A surface container for grouping related content and actions. Compose `CardHeader`, `CardContent`, and `CardFooter` inside it; use `size` to switch between default and compact padding.',
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Cancel</Button>
        <Button className="w-full">Save</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Card {...args} className="w-72">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>A compact card layout.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Small card content.</p>
      </CardContent>
    </Card>
  ),
}

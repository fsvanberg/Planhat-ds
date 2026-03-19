import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon, SearchIcon } from 'lucide-react'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { include: ['orientation'] },
    docs: {
      description: {
        component: 'A group of related buttons joined visually. Supports horizontal and vertical orientation.',
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
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Save</Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="More options">▾</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText><SearchIcon /></ButtonGroupText>
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  ),
}

export const IconGroup: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon-sm" aria-label="Align left"><AlignLeftIcon /></Button>
      <Button variant="outline" size="icon-sm" aria-label="Align center"><AlignCenterIcon /></Button>
      <Button variant="outline" size="icon-sm" aria-label="Align right"><AlignRightIcon /></Button>
    </ButtonGroup>
  ),
}

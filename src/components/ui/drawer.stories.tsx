import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A slide-in panel built on Vaul that enters from any edge of the screen. Use `direction` to control which side it slides from; on mobile it renders as a bottom sheet with a drag handle.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
    },
  },
  args: {
    direction: 'bottom',
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline">Open Drawer</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const Right: Story = {
  args: { direction: 'right' },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline">Open Right Drawer</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Right Drawer</DrawerTitle>
          <DrawerDescription>This drawer slides in from the right.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline">Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    docs: {
      description: {
        component: 'A navigation menu with dropdown panels built on Base UI.',
      },
    },
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-64">
              <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-accent">
                <div className="font-medium text-sm mb-1">Introduction</div>
                <p className="text-xs text-muted-foreground">Re-usable components built with Base UI.</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-accent">
                <div className="font-medium text-sm mb-1">Installation</div>
                <p className="text-xs text-muted-foreground">How to install dependencies and structure your app.</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-accent">
                <div className="font-medium text-sm mb-1">Typography</div>
                <p className="text-xs text-muted-foreground">Styles for headings, paragraphs, lists…</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-2 p-4 w-80">
              {['Alert', 'Badge', 'Button', 'Card', 'Dialog', 'Input', 'Select', 'Table'].map((name) => (
                <NavigationMenuLink key={name} href="#" className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                  {name}
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="inline-flex h-9 items-center px-2.5 text-sm font-medium rounded-lg hover:bg-muted">
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

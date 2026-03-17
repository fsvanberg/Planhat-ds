import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dashboard01 } from '@/components/blocks/dashboard-01'

const meta = {
  title: 'Blocks/Dashboard 01',
  component: Dashboard01,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Dashboard layout with sidebar navigation, KPI cards, area chart, and data table. Based on shadcn/ui Pro Blocks — Dashboard 01.',
      },
    },
  },
} satisfies Meta<typeof Dashboard01>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

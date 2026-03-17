import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    docs: {
      description: {
        component: 'A form field wrapper that pairs labels, inputs, descriptions, and errors with consistent layout.',
      },
    },
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field className="w-72">
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" placeholder="John Doe" />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field className="w-72">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="johndoe" />
      <FieldDescription>This is your public display name.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field className="w-72">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" aria-invalid defaultValue="not-an-email" />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <FieldGroup className="w-80">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="h-first">First name</FieldLabel>
        <Input id="h-first" placeholder="John" />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="h-last">Last name</FieldLabel>
        <Input id="h-last" placeholder="Doe" />
      </Field>
    </FieldGroup>
  ),
}

export const WithFieldSet: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Notifications</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="email-notif" />
          <FieldLabel htmlFor="email-notif">Email notifications</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="sms-notif" />
          <FieldLabel htmlFor="sms-notif">SMS notifications</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}

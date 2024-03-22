import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../atoms';

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Accent: Story = {
  args: {
    label: "Accent button",
    size: "DEFAULT",
    type: "button",
    color: "accent",
  },
}
export const Dark: Story = {
  args: {
    label: "Dark button",
    size: "DEFAULT",
    type: "button",
    color: "dark",
  },
}
export const Error: Story = {
  args: {
    label: "Error button",
    size: "DEFAULT",
    type: "button",
    color: "error",
  },
}


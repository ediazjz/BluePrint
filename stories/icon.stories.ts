import type { Meta, StoryObj } from "@storybook/react"

import { Icon } from "../components/icon"

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {
  args: {
    shape: "clear_day",
  },
}

export const Moon: Story = {
  args: {
    shape: "clear_night",
  },
}

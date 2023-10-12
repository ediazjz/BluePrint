import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../components/button"

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

export const Primary: Story = {
  args: {
    type: "button",
    text: "This is a button",
    icon: "clear_day",
    styling: "btn-primary-filled",
    onClick: () => console.log("This button is primary"),
  },
}

export const Dark: Story = {
  args: {
    type: "button",
    text: "This is a button",
    icon: "clear_day",
    styling: "btn-dark-filled",
    onClick: () => console.log("This button is dark"),
  },
}

export const Danger: Story = {
  args: {
    type: "button",
    text: "This is a button",
    icon: "clear_day",
    styling: "btn-danger-filled",
  },
}

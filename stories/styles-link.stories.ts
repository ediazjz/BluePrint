import type { Meta, StoryObj } from "@storybook/react"

import { StyledLink } from "../components/styled-link"

const meta = {
  title: "Atoms/Button/StyledLink",
  component: StyledLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StyledLink>

export default meta
type Story = StoryObj<typeof meta>

export const External: Story = {
  args: {
    type: "external",
    href: "https://www.github.com",
    text: "This is a styled link as a button",
    icon: "public",
    styling: "btn-primary-filled",
  },
}

export const Internal: Story = {
  args: {
    type: "internal",
    href: "/",
    text: "This is a styled link as a button",
    icon: "vpn_lock",
    styling: "btn-dark-filled",
  },
}

import type { Meta, StoryObj } from "@storybook/react"

import { Testimonial } from "../components/testimonial"

const meta = {
  title: "Molecules/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonial>

export default meta
type Story = StoryObj<typeof meta>

export const Big: Story = {
  args: {
    imageUrl: "../demo.png",
    name: "John doe",
    title: "CEO",
    companyLogoUrl: "../logo.png",
    testimonial: "Lorem ipsum ",
    userType: "customer",
  },
}

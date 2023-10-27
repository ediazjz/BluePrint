import type { Meta, StoryObj } from "@storybook/react"

import { DisplayTable } from "../components/display-table"

const meta = {
  title: "Organisms/DisplayTable",
  component: DisplayTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DisplayTable>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: "This is a table",
  },
}

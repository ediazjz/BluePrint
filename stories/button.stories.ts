// Import types
import type { Meta, StoryObj } from "@storybook/react"

import { action } from "@storybook/addon-actions"

// Import your component
import { Button } from "../components"

// Declare metadata of the Story
const meta = {
  // Use / to group Stories, for example using Atomic Design
  title: "Atoms/Button",
  component: Button,
  // Sets how your component will be rendered in Storybook
  // Meta-level parameters
  parameters: {
    layout: "centered",
  },
  // argTypes: {
  //   colorStyle: {
  //     control: { type: "radio" },
  //   },
  // },
  // Always add the autodocs tag, unless you write your own documentation
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

type TStory = StoryObj<typeof meta>

// Create as many examples as needed to represent the most important variants of the component
// You have to export them out to visualize them in your workshop
export const Primary: TStory = {
  // You can pass data to your props using args
  args: {
    isDisabled: false,
    text: "This is a test",
    colorStyle: "btn-primary-filled",
    onClick: () => console.log("Button clicked"),
  },
  // Story-level parameters
  // parameters: {
  //   backgrounds: {
  //     default: "dark",
  //   },
  // },
}

export const Accent: TStory = {
  args: {
    isDisabled: true,
    text: "This is the power of Storybook",
    colorStyle: "btn-primary-outlined",
  },
}

// Export as default the meta object
export default meta

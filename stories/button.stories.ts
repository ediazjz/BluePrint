// Import types
import type { Meta, StoryObj } from "@storybook/react"

// Import your component
import { Button } from "../components/button"

// Declare metada of the Story
const meta = {
  // Use / to group Stories, for example using Atomic Design
  title: "Atoms/Button",
  component: Button,
  // Sets how your component will be rendered in Storybook
  parameters: {
    layout: "centered",
  },
  // Always add the autodocs tag, unless you write your own documentation
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

type TStory = StoryObj<typeof meta>

// Create as many examples as needed to represent the most important variants of the component
// You have to export them out to visualize them in your workshop
export const Primary: TStory = {
  // You can pass data to your props using args
  args: {
    type: "button",
    text: "This is a button",
    icon: "clear_day",
    styling: "btn-primary-filled",
    onClick: () => console.log("This button is primary"),
  },
}

// If you are using React to build your component, you can use the render functions
export const Accent: TStory = {
  render: () => <Button type="button" text="Another example" icon="clear_day" styling="btn-primary-filled" />,
};

// Export as default the meta object
export default meta

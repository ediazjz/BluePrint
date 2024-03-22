import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within, expect, fn } from "@storybook/test";

import { LoginForm } from "../organisms";

const meta = {
  title: "Organisms/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  args: {},
};

export const FilledForm: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Input", async () => {
      await userEvent.type(
        canvas.getByPlaceholderText("email"),
        "hi@example.com"
      );
      await userEvent.type(
        canvas.getByPlaceholderText("password"),
        "supersecret"
      );
    });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    await step("Validate execution and feedback", async () => {
      await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());

      await expect(canvas.getByText("You are logged in!")).toBeInTheDocument();
    });
  },
  args: {},
};

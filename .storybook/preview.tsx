import * as React from "react"

import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"

import { inter } from "../lib/fonts"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div className={`${inter.variable}`}>
        <Story />
      </div>
    ),
  ],
}

export default preview

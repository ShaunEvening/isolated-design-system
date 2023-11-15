import { Meta, StoryObj } from "@storybook/react";
import { ColorPalette, ColorScale, ColorsExample } from "./colors";

import colors from "tailwindcss/colors";

const meta = {
  title: "System/Colors",
  component: ColorPalette,
} satisfies Meta<typeof ColorPalette>;

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const fullPalette: Story = {
  render: () => (
    <ColorPalette>
      <ColorScale
        groupName="Grayscale"
        scale={{
          50: "bg-gray-50",
          100: "bg-gray-100",
          200: "bg-gray-200",
          300: "bg-gray-300",
          400: "bg-gray-400",
          500: "bg-gray-500",
          600: "bg-gray-600",
          700: "bg-gray-700",
          800: "bg-gray-800",
          900: "bg-gray-900",
          950: "bg-gray-950",
        }}
      />
      <ColorScale
        groupName="Primary"
        scale={{
          50: "bg-pink-50",
          100: "bg-pink-100",
          200: "bg-pink-200",
          300: "bg-pink-300",
          400: "bg-pink-400",
          500: "bg-pink-500",
          600: "bg-pink-600",
          700: "bg-pink-700",
          800: "bg-pink-800",
          900: "bg-pink-900",
          950: "bg-pink-950",
        }}
      />
      <ColorScale
        groupName="Secondary"
        scale={{
          50: "bg-sky-50",
          100: "bg-sky-100",
          200: "bg-sky-200",
          300: "bg-sky-300",
          400: "bg-sky-400",
          500: "bg-sky-500",
          600: "bg-sky-600",
          700: "bg-sky-700",
          800: "bg-sky-800",
          900: "bg-sky-900",
          950: "bg-sky-950",
        }}
      />
    </ColorPalette>
  ),
};

export const limitedPalette: Story = {
  render: () => (
    <ColorPalette>
      <ColorScale
        groupName="Grayscale"
        scale={{
          Background: "bg-background",
          "Background Accent": "bg-background-accent",
          Foreground: "bg-foreground",
        }}
      />
      <ColorScale
        groupName="Primary"
        scale={{
          Background: "bg-primary-background",
          "Background Accent": "bg-primary-background-accent",
          Base: "bg-primary",
          Hover: "bg-primary-hover",
          Active: "bg-primary-active",
          Foreground: "bg-primary-foreground",
        }}
      />
      <ColorScale
        groupName="Secondary"
        scale={{
          Background: "bg-secondary-background",
          "Background Accent": "bg-secondary-background-accent",
          Base: "bg-secondary",
          Hover: "bg-secondary-hover",
          Active: "bg-secondary-active",
          Foreground: "bg-secondary-foreground",
        }}
      />
    </ColorPalette>
  ),
};

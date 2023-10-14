import { Meta, StoryObj } from "@storybook/react";
import { TypographyScale } from "./typography";

const meta = {
  title: "System/Typography",
  component: TypographyScale,
} satisfies Meta<typeof TypographyScale>;

export default meta;

type Story = StoryObj<typeof TypographyScale>;

export const scale: Story = {
  args: {
    groupName: "Typography Scale",
    scale: {
      "Display Heading": "font-semibold text-8xl",
      "Display Subheading": "font-semibold text-7xl",
      "Heading 1": "font-semibold text-5xl",
      "Heading 2": "font-semibold text-4xl",
      "Heading 3": "font-semibold text-3xl",
      "Heading 4": "font-semibold text-2xl",
      "Heading 5": "font-semibold text-xl",
      "Heading 6": "font-semibold text-lg",
      "text-base": "font-medium text-lg/6",
    },
  },
};

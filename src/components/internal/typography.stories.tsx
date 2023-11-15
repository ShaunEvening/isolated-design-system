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
      "Display Heading": "display-heading",
      "Display Subheading": "display-subheading",
      "Heading 1": "heading1",
      "Heading 2": "heading2",
      "Heading 3": "heading3",
      "Heading 4": "heading4",
      "Heading 5": "heading5",
      "Heading 6": "heading6",
      "text-base": "font-body",
    },
  },
};

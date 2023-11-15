import { Meta, StoryObj } from "@storybook/react";
import { SpacingScale } from "./spacing";

const meta = {
  title: "System/Spacing",
  component: SpacingScale,
} satisfies Meta<typeof SpacingScale>;

export default meta;

type Story = StoryObj<typeof SpacingScale>;

export const scale: Story = {
  args: {
    scale: [
      { "0": "pl-0" },
      { px: "pl-px" },
      { "0.5": "pl-1" },
      { "1": "pl-2" },
      { "1.5": "pl-3" },
      { "2": "pl-4" },
      { "2.5": "pl-5" },
      { "3": "pl-6" },
      { "4": "pl-8" },
      { "5": "pl-10" },
      { "6": "pl-12" },
      { "7": "pl-14" },
      { "8": "pl-16" },
    ],
  },
};

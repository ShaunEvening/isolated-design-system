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
      <ColorScale groupName="Grayscale" scale={colors.zinc} />
      <ColorScale groupName="Primary" scale={colors.pink} />
      <ColorScale groupName="Secondary" scale={colors.sky} />
    </ColorPalette>
  ),
};

const reducePalette = (palette: Record<string, string>) => ({
  background: palette[50],
  border: palette[200],
  base: palette[500],
  hover: palette[600],
  active: palette[700],
  text: palette[900],
});

export const limitedPalette: Story = {
  render: () => (
    <ColorPalette>
      <ColorScale groupName="Grayscale" scale={reducePalette(colors.zinc)} />
      <ColorScale groupName="Primary" scale={reducePalette(colors.pink)} />
      <ColorScale groupName="Secondary" scale={reducePalette(colors.sky)} />
    </ColorPalette>
  ),
};

export const example: Story = {
  render: () => <ColorsExample />,
};

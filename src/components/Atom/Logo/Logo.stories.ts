import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta = {
  title: "Atom/Logo",
  component: Logo,
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    size: 20,
  },
};

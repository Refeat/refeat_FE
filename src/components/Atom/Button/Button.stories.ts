import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: () => {
      alert("clicked!");
    },
  },
};

export const Basic: Story = {
  args: {
    children: "Button",
    className: "rounded-md bg-gradient-to-r from-blue-500 to-purple-700",
  },
};

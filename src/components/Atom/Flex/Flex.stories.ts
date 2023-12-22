import type { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";

const meta = {
  title: "Atom/Flex",
  component: Flex,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {},
};

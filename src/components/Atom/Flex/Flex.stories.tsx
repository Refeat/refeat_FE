import type { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";

const meta = {
  title: "Atom/Flex",
  component: Flex,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <p>I</p>
        <p>am</p>
        <p>Flex</p>
      </>
    ),
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {},
};

export const Column: Story = {
  args: {
    dir: "col",
  },
};

export const RowReverse: Story = {
  args: {
    dir: "row-reverse",
  },
};

export const ColumnReverse: Story = {
  args: {
    dir: "col-reverse",
  },
};

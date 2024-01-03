import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "./SideBar";

const meta = {
  title: "Organism/SideBar",
  component: SideBar,
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    size: "small",
  },
};

export const ImageAvailable: Story = {
  args: {},
};

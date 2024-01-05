import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "./ProfileCard";

const meta = {
  title: "Molecule/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    name: "Sangmin Lee",
  },
};

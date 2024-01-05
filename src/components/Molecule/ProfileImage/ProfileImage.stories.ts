import type { Meta, StoryObj } from "@storybook/react";
import ProfileImage from "./ProfileImage";

const meta = {
  title: "Molecule/ProfileImage",
  component: ProfileImage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {
  args: {
    size: "small",
  },
};

export const ImageAvailable: Story = {
  args: {
    size: "small",
    imgUrl:
      "https://i.namu.wiki/i/k0bB7xqoJ8XmdJkCH45GWzD7JciK4beGyR9j6_42V9TxV9uAmPAMUU2L_Qu_8dGO8a5ZsUH71ljqMu32R_VZVw.webp",
  },
};

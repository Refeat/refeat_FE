import { Meta, StoryObj } from "@storybook/react";
import ProfileEdit from "./ProfileEdit";
import Button from "@/components/Atom/Button/Button";
import Modal from "@/components/Atom/Modal/Modal";

const meta: Meta<typeof ProfileEdit> = {
  title: "Organism/ProfileEdit",
  component: ProfileEdit,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div id="portal" style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Modal content={<ProfileEdit />}>
        <Button>Select Month!</Button>
      </Modal>
    );
  },
};

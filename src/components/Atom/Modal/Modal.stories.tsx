import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "Atom/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: (Story) => {
    return (
      <div id="portal" className="w-screen h-screen">
        <Story />
      </div>
    );
  },
} satisfies Meta<typeof Modal>;

const ContentSample = ({ func }: { func?: () => void }) => {
  const trigger = () => func && func();
  return (
    <div className="w-[500px] h-[500px] bg-white text-black fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      {`Hi I'm Modal`}
      <button onClick={() => trigger()} className="bg-black text-white">
        close
      </button>
    </div>
  );
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    content: <ContentSample />,
    children: <button>Click Me</button>,
  },
};

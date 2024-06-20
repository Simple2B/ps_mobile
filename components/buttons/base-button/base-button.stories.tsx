import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { BaseButton } from "./base-button";

const MyButtonMeta: Meta<typeof BaseButton> = {
  title: "BaseButton",
  component: BaseButton,

  argTypes: {
    onPress: { action: "pressed the button" },
    disabled: { control: "boolean" },
  },
  args: {
    title: "Press me!",
    disabled: false,
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof BaseButton> = {};

export const Outline: StoryObj<typeof BaseButton> = {
  args: {
    variant: "outline",
  },
};

export const Link: StoryObj<typeof BaseButton> = {
  args: {
    variant: "link",
  },
};

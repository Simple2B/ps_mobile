import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./login-form";

const MyButtonMeta: Meta<typeof LoginForm> = {
  title: "Forms/LoginForm",
  component: LoginForm,

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

export const Basic: StoryObj<typeof LoginForm> = {};

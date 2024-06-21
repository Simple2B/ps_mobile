import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "./register-form";

const MyButtonMeta: Meta<typeof RegisterForm> = {
  title: "Forms/RegisterForm",
  component: RegisterForm,

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof RegisterForm> = {};

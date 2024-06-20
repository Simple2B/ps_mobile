import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { BaseInput } from "./base-input";
import { Mail, Lock } from "lucide-react-native";
import { useState } from "react";

const MyButtonMeta: Meta<typeof BaseInput> = {
  title: "MyButton",
  component: BaseInput,

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],

  render: ({ value: _, onChange: __, ...rest }) => {
    const [value, setValue] = useState("");
    return <BaseInput value={value} onChange={setValue} {...rest} />;
  },
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof BaseInput> = {
  args: {
    placeholder: "Type here",
    Icon: Mail,
  },
};

export const Password: StoryObj<typeof BaseInput> = {
  args: {
    placeholder: "Password",
    Icon: Lock,
    variant: "password",
  },
};

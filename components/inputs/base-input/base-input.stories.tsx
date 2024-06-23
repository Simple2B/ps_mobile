import { View } from "react-native";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Lock } from "lucide-react-native";

import { BaseInput } from "./base-input";

const MyButtonMeta: Meta<typeof BaseInput> = {
  title: "BaseInput",
  component: BaseInput,

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],

  render: ({ value: _, onChange: __, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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

export const Error: StoryObj<typeof BaseInput> = {
  args: {
    placeholder: "Type here",
    Icon: Mail,
    error: "Invalid email",
  },
};

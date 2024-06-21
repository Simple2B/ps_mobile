import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { SocialButtons } from "./social-buttons";

const MyButtonMeta: Meta<typeof SocialButtons> = {
  title: "SocialButtons",
  component: SocialButtons,

  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof SocialButtons> = {};

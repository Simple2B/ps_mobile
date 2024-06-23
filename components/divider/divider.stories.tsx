import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Divider } from "./divider";

const MyButtonMeta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof Divider> = {};

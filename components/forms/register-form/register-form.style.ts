import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces }) => ({
  wrapper: {
    alignSelf: "stretch",
    gap: spaces.md,
  },
}));

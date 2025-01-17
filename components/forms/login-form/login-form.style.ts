import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces }) => ({
  wrapper: {
    alignSelf: "stretch",
    gap: spaces.md,
  },
  forgotPassword: {
    alignItems: "flex-end",
    paddingBottom: spaces.md,
  },
}));

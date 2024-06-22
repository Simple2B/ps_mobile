import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces }) => ({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spaces.md,
    gap: spaces.md,
  },
}));

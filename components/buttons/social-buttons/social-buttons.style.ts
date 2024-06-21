import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces }) => ({
  wrapper: {
    flexDirection: "row",
    gap: spaces.xs,
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
  },
  buttonWrapper: {
    flex: spaces.one,
  },
}));

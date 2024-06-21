import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces, colors }) => ({
  line: {
    flex: 1,
    height: spaces.one,
    backgroundColor: colors.border,
    flexDirection: "row",
    alignSelf: "center",
  },
}));

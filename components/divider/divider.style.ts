import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces, colors }) => ({
  divider: {
    height: spaces.one,
    backgroundColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    marginHorizontal: spaces.xl,
    position: "absolute",
    left: 0,
    right: 0,
  },
  wrapper: {
    backgroundColor: colors.background,
    padding: spaces.xs,
  },
}));

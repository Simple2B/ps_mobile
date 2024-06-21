import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces, colors }) => ({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: spaces.one,
    borderRadius: spaces.xs,
    flexDirection: "row",
    paddingHorizontal: spaces.xs,
    gap: spaces.xs,
    variants: {
      focused: {
        true: {
          borderColor: colors.primary,
        },
        false: {
          borderColor: colors.text,
        },
      },
    },
  },
  input: {
    height: spaces.input,
    flex: spaces.one,
    variants: {
      focused: {
        true: {
          color: colors.textFocused,
        },
        false: {
          color: colors.text,
        },
      },
    },
  },
  error: {
    color: colors.notification,
    fontSize: spaces.sm,
    position: "absolute",
    bottom: -spaces.md,
    left: spaces.xs,
  },
}));

import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces, colors, fonts }) => ({
  wrapper: ({ pressed }: { pressed: boolean }) => ({
    height: spaces.input,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    variants: {
      variant: {
        primary: {
          backgroundColor: pressed ? colors.accent : colors.primary,
          borderRadius: spaces.xl,
          opacity: pressed ? 0.8 : 1,
        },
        outline: {
          borderColor: pressed ? colors.accent : colors.primary,
          borderWidth: spaces.one,
          borderRadius: spaces.xl,
          backgroundColor: pressed ? colors.hoverBG : colors.transparent,
          opacity: pressed ? 0.8 : 1,
        },
        link: {
          backgroundColor: colors.transparent,
          color: pressed ? colors.accent : colors.primary,
        },
      },
      disabled: {
        true: {
          opacity: 0.4,
        },
        false: {},
      },
    },
  }),
  title: {
    variants: {
      variant: {
        primary: {
          color: colors.background,
        },
        outline: {
          color: colors.primary,
        },
        link: {
          color: colors.primary,
          fontFamily: fonts.semiBold,
        },
      },
    },
  },
}));

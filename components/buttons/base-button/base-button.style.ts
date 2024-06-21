import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(({ spaces, colors, fonts }) => ({
  button: ({ pressed }: { pressed: boolean }) => ({
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spaces.xxs,
    variants: {
      variant: {
        primary: {
          height: spaces.input,
          alignSelf: "stretch",
          backgroundColor: pressed ? colors.accent : colors.primary,
          borderRadius: spaces.xl,
          opacity: pressed ? 0.8 : 1,
        },
        outline: {
          height: spaces.input,
          alignSelf: "stretch",
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

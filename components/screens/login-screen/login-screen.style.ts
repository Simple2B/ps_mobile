import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(
  ({ spaces, colors, fonts, fontSizes }, { statusBar }) => ({
    wrapper: {
      flex: spaces.one,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spaces.lg,
      paddingTop: statusBar.height,
    },
    divider: {
      flexDirection: "row",
      gap: spaces.xs,
      paddingHorizontal: spaces.xl,
      paddingVertical: spaces.sm,
    },
    text: {
      color: colors.text,
      paddingTop: spaces.lg,
      paddingBottom: spaces.md,
    },
    logoArea: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: spaces.xl,
    },
    title: {
      fontSize: fontSizes.XL,
      fontFamily: fonts.semiBold,
      color: colors.primary,
    },
  })
);

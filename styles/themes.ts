import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { SPACES } from "./spaces";
import { FONTS, FONT_SIZES } from "./fonts";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3949AB",
    secondary: "#E6E9FA",
    text: "#828282",
    textSecondary: "#666",
    background: "#fff",
    border: "#D0D0D0",
    shadowColor: "#000",
    card: "#fff",
    textFocused: "#000",
  },
  fontSizes: FONT_SIZES,
  spaces: SPACES,
  fonts: FONTS,
} as const;

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#3949AB",
    secondary: "#E6E9FA",
    text: "#828282",
    textSecondary: "#666",
    background: "#fff",
    border: "#D0D0D0",
    shadowColor: "#000",
    card: "#fff",
    textFocused: "#000",
  },
  fontSizes: FONT_SIZES,
  spaces: SPACES,
  fonts: FONTS,
} as const;

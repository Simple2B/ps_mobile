import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { SPACES } from "./spaces";
import { FONTS, FONT_SIZES } from "./fonts";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7546F6",
    secondary: "#dc3",
    accent: "#d54",
    text: "#000",
    textSecondary: "#666",
    background: "#fff",
    success: "#28a745",
    danger: "#dc3545",
    border: "rgba(0, 0, 0, 0.23)",
    shadowColor: "#000",
    card: "#fff",
  },
  fontSizes: FONT_SIZES,
  spaces: SPACES,
  fonts: FONTS,
} as const;

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#7546F6",
    secondary: "#dc3",
    accent: "#d54",
    text: "#000",
    textSecondary: "#666",
    background: "#fff",
    success: "#28a745",
    danger: "#dc3545",
    border: "rgba(0, 0, 0, 0.23)",
    shadowColor: "#000",
    card: "#fff",
  },
  fontSizes: FONT_SIZES,
  spaces: SPACES,
  fonts: FONTS,
} as const;

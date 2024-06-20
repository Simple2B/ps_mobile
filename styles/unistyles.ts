import { UnistylesRegistry } from "react-native-unistyles";

import { darkTheme, lightTheme } from "./themes";

interface AppThemes {
  lightTheme: typeof lightTheme;
  darkTheme: typeof darkTheme;
}

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  lightTheme: lightTheme,
  darkTheme: darkTheme,
}).addConfig({
  initialTheme: "lightTheme",
});

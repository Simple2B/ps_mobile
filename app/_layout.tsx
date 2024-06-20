import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import Constants from "expo-constants";

import "@/styles/unistyles";
import { useAppInit } from "@/hooks/useAppInit";

// Prevent the splash screen from auto-hiding before asset loading is complete.
Constants.expoConfig?.extra?.storybookEnabled !== "true" &&
  SplashScreen.preventAutoHideAsync();

function RootLayout() {
  console.log("RootLayout");

  const { loaded, colorTheme } = useAppInit();

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

let AppEntryPoint = RootLayout;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  console.log(
    "storybookEnabled",
    Constants.expoConfig?.extra?.storybookEnabled
  );

  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;

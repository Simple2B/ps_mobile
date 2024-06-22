import { ThemeProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import Constants from "expo-constants";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import "react-native-reanimated";

import { SecureStorageKeys } from "@/constants/storage-keys";
import { useAppInit } from "@/hooks/useAppInit";
import { queryClient } from "@/queryclient";
import "@/styles/unistyles";

axios.interceptors.request.use(async (request) => {
  // Your interceptor logic here
  const token = (await SecureStore.getItemAsync(SecureStorageKeys.TOKEN)) ?? "";
  const headers = request.headers;
  if (token && headers) {
    headers.Authorization = `Bearer ${token}`;
  }
  return {
    ...request,
    headers,
  };
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
Constants.expoConfig?.extra?.storybookEnabled !== "true" &&
  SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const { loaded, colorTheme } = useAppInit();

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

let AppEntryPoint = RootLayout;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;

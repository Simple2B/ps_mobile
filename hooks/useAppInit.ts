import { darkTheme, lightTheme } from "@/styles/themes";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export const useAppInit = () => {
  const colorScheme = useColorScheme();
  const colorTheme = colorScheme === "light" ? lightTheme : darkTheme;
  const [loaded] = useFonts({
    LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
    LatoSemibold: require("../assets/fonts/Lato-Semibold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return { loaded, colorTheme };
};

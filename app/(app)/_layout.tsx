import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useAPIWhoami } from "@/api/api/api";

export default function AppLayout() {
  const { isSuccess, isLoading } = useAPIWhoami();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!isSuccess) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

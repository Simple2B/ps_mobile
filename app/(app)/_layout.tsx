import { View } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useAPIWhoami } from "@/api/api/api";
import { Logo } from "@/assets/icons";

export default function AppLayout() {
  const { isSuccess, isLoading } = useAPIWhoami({
    query: {
      retry: 1,
    },
  });

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo width={120} height={120} />
      </View>
    );
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

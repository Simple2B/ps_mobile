import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { useQueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";

import { useAPIGreeting } from "@/api/user/user";
import { BaseButton } from "@/components/buttons/base-button/base-button";
import { stylesheet } from "./main-screen.style";

export const MainScreen = () => {
  const queryClient = useQueryClient();
  const { styles } = useStyles(stylesheet);
  const router = useRouter();

  const { data } = useAPIGreeting({
    query: {
      refetchInterval: 0,
    },
  });

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("token");
    queryClient.clear();
    router.replace("/login");
  };
  return (
    <View style={styles.wrapper}>
      <Text>{data?.data.message}</Text>
      <BaseButton title="Logout" onPress={handleLogout} variant="outline" />
    </View>
  );
};

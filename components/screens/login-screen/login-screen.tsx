import React, { FC } from "react";
import { Text, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { useRouter } from "expo-router";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

import { LoginForm } from "@/components/forms/login-form/login-form";
import { Divider } from "@/components/divider/divider";
import { Logo } from "@/assets/icons";
import { SocialButtons } from "@/components/buttons/social-buttons/social-buttons";
import { BaseButton } from "@/components/buttons/base-button/base-button";

import { stylesheet } from "./login-screen.style";

export const LoginScreen: FC = () => {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();

  const { height } = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -height.value / 2 }],
  }));

  const handleRegister = () => {
    router.push("register");
  };

  return (
    <Animated.View style={[styles.wrapper, animatedStyles]}>
      <View style={styles.logoArea}>
        <Logo />
        <Text style={styles.title}>Log in</Text>
      </View>
      <LoginForm />
      <View style={styles.divider}>
        <Divider />
        <Text>Or</Text>
        <Divider />
      </View>
      <SocialButtons />
      <Text style={styles.text}>Have no account yet?</Text>
      <BaseButton title="Register" onPress={handleRegister} variant="outline" />
      <View style={styles.logoArea} />
    </Animated.View>
  );
};

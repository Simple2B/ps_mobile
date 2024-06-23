import React, { FC } from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";

import { SocialButtons } from "@/components/buttons/social-buttons/social-buttons";
import { Divider } from "@/components/divider/divider";
import { RegisterForm } from "@/components/forms/register-form/register-form";
import { Logo } from "@/assets/icons";

import { stylesheet } from "./register-screen.style";

export const RegisterScreen: FC = () => {
  const { styles } = useStyles(stylesheet);
  const { height } = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -height.value / 2 }],
  }));

  return (
    <Animated.View style={[styles.wrapper, animatedStyles]}>
      <View style={styles.logoArea}>
        <Logo />
        <Text style={styles.title}>Register</Text>
      </View>
      <RegisterForm />
      <View style={styles.divider}>
        <Divider />
        <Text>Or</Text>
        <Divider />
      </View>
      <Text style={styles.text}>Use social networks accounts</Text>
      <SocialButtons />
      <View style={styles.logoArea} />
    </Animated.View>
  );
};

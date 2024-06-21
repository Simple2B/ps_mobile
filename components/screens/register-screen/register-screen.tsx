import React, { FC } from "react";
import { Text, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./register-screen.style";
import { Logo } from "@/assets/icons";
import { RegisterForm } from "@/components/forms/register-form/register-form";
import { Divider } from "@/components/divider/divider";
import { SocialButtons } from "@/components/buttons/social-buttons/social-buttons";

export const RegisterScreen: FC = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.wrapper}>
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
    </View>
  );
};

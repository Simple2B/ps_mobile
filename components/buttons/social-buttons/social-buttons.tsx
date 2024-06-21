import React, { FC } from "react";
import { Alert, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { Facebook, Google } from "@/assets/icons";
import { BaseButton } from "../base-button/base-button";
import { stylesheet } from "./social-buttons.style";

export const SocialButtons: FC = () => {
  const { styles } = useStyles(stylesheet);
  const handleFacebook = () => {
    Alert.alert("Facebook", "Facebook login");
  };
  const handleGoogle = () => {
    Alert.alert("Google", "Google login");
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <BaseButton
          Icon={<Google />}
          title="Google"
          onPress={handleGoogle}
          variant="outline"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <BaseButton
          Icon={<Facebook />}
          title="Facebook"
          onPress={handleFacebook}
          variant="outline"
        />
      </View>
    </View>
  );
};

import React, { FC, ReactNode } from "react";
import { Pressable, Text } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./base-button.style";

type BaseButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline" | "link";
  Icon?: ReactNode;
};

export const BaseButton: FC<BaseButtonProps> = ({
  onPress,
  disabled,
  title,
  variant = "primary",
  Icon,
}) => {
  const { styles } = useStyles(stylesheet, { variant, disabled });
  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.button}>
      {Icon}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

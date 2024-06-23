import { EyeIcon, EyeOffIcon, LucideIcon } from "lucide-react-native";
import React, { forwardRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./base-input.styles";

type BaseInputProps = {
  value: string;
  onChange: (value: string) => void;
  Icon: LucideIcon;
  placeholder?: string;
  variant: "text" | "password";
  onSubmit?: () => void;
  error?: string;
};
const BaseInput = forwardRef<TextInput, BaseInputProps>(
  ({ value, onChange, Icon, placeholder, variant, onSubmit, error }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const [hidden, setHidden] = React.useState(variant === "password");

    const { styles, theme } = useStyles(stylesheet, { focused });

    const handleVisibleToggle = () => {
      setHidden((prev) => !prev);
    };

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setFocused(false);
    };

    return (
      <View style={styles.wrapper}>
        <Icon color={theme.colors.text} />
        <TextInput
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text}
          secureTextEntry={variant === "password" && hidden}
          onSubmitEditing={onSubmit}
        />
        {variant === "password" && (
          <Pressable onPress={handleVisibleToggle}>
            {hidden ? (
              <EyeIcon color={theme.colors.text} />
            ) : (
              <EyeOffIcon color={theme.colors.text} />
            )}
          </Pressable>
        )}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
);

BaseInput.displayName = "BaseInput";

export { BaseInput };

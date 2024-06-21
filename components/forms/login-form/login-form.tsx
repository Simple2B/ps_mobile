import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  SubmitHandler,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";
import React, { FC } from "react";
import { Alert, Text, View } from "react-native";
import { Mail } from "lucide-react-native";

import { BaseButton } from "@/components/buttons/base-button/base-button";
import { BaseInput } from "@/components/inputs/base-input/base-input";
import { FormSchema, formSchema } from "./login-form.schema";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./login-form.style";

export const LoginForm: FC = () => {
  const { styles } = useStyles(stylesheet);
  const { handleSubmit, control } = useForm<FormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const handleForgotPassword = () => {
    Alert.alert("Forgot password", "Please enter your email address");
  };

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.wrapper}>
      <Controller
        control={control}
        name={"email"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <BaseInput
            placeholder="Email"
            value={value}
            onChange={onChange}
            Icon={Mail}
            variant="text"
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name={"password"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <BaseInput
            placeholder="Password"
            value={value}
            onChange={onChange}
            Icon={Mail}
            variant="password"
            error={error?.message}
          />
        )}
      />
      <View style={styles.forgotPassword}>
        <BaseButton
          title="Forgot password?"
          variant="link"
          onPress={handleForgotPassword}
        />
      </View>
      <BaseButton title="Log In" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

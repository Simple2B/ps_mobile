import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react-native";
import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import * as SecureStore from "expo-secure-store";

import { useAPIToken } from "@/api/authentication/authentication";
import { BaseButton } from "@/components/buttons/base-button/base-button";
import { BaseInput } from "@/components/inputs/base-input/base-input";
import { FormSchema, formSchema } from "./login-form.schema";
import { SecureStorageKeys } from "@/constants/storage-keys";
import { stylesheet } from "./login-form.style";
import { useRouter } from "expo-router";

export const LoginForm: FC = () => {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();
  const { mutate, isPending } = useAPIToken({
    mutation: {
      onSuccess: ({ data }) => {
        SecureStore.setItemAsync(SecureStorageKeys.TOKEN, data.access_token);
        router.replace("/");
      },
      onError: () => {
        Alert.alert("Error", "An error occurred while logging in");
      },
    },
  });

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
    mutate({
      data: {
        username: data.email,
        password: data.password,
      },
    });
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
            Icon={Lock}
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
          disabled={isPending}
        />
      </View>
      <BaseButton title="Log In" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

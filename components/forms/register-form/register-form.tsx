import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react-native";
import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { BaseButton } from "@/components/buttons/base-button/base-button";
import { BaseInput } from "@/components/inputs/base-input/base-input";
import { FormSchema, formSchema } from "./register-form.schema";
import { stylesheet } from "./register-form.style";
import { useAPIRegister } from "@/api/authentication/authentication";
import { useRouter } from "expo-router";

export const RegisterForm: FC = () => {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();

  const { mutate, isPending } = useAPIRegister({
    mutation: {
      onSuccess: () => {
        router.push("/");
      },
      onError: () => {
        Alert.alert("Error", "An error occurred while registering");
      },
    },
  });

  const { handleSubmit, control } = useForm<FormSchema>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    mutate({
      data: {
        email: data.email,
        password: data.password,
        username: data.email,
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
      <Controller
        control={control}
        name={"confirmPassword"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <BaseInput
            placeholder="Confirm Password"
            value={value}
            onChange={onChange}
            Icon={Lock}
            variant="password"
            error={error?.message}
          />
        )}
      />

      <BaseButton
        title="Register"
        onPress={handleSubmit(onSubmit)}
        disabled={isPending}
      />
    </View>
  );
};

import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function NotFoundScreen() {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <Stack.Screen options={{ title: "INDEX!" }} />
      <View style={styles.container}>
        <Text style={styles.link}>THIS IS LOGIN SCREEN</Text>
      </View>
    </>
  );
}

const stylesheet = createStyleSheet(({ spaces, colors, fonts }) => ({
  container: {
    flex: spaces.one,
    alignItems: "center",
    justifyContent: "center",
    padding: spaces.lg,
  },
  link: {
    marginTop: spaces.md,
    paddingVertical: spaces.md,
    color: colors.primary,
  },
}));

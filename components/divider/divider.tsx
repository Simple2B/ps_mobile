import React, { FC } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./divider.style";

export const Divider: FC = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.line} />;
};

import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./divider.style";

export const Divider: FC<PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <View style={styles.divider} />
      {children && <View style={styles.wrapper}>{children}</View>}
    </>
  );
};

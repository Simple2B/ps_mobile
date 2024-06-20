import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import { SplashScreen } from "expo-router";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        SplashScreen.hideAsync();
      }, []);
      return <Story />;
    },
  ],
};

export default preview;

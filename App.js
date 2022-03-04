import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { PostsScreen } from "./src/features/posts/screens/posts.screen";
import { PostsContextProvider } from "./src/services/posts/posts.context";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswalOverloaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoOverloaded] = useLato({
    Lato_400Regular,
  });

  if (!oswalOverloaded || !latoOverloaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

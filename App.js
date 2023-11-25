import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";

// SplashScreen will not hide until 3 sec pass.
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 200);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

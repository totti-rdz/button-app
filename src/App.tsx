import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type StackParamList = {
  home: undefined;
  settings: { url: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="settings"
              component={SettingsScreen}
              initialParams={{ url: "" }}
              options={{ title: "Settings" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

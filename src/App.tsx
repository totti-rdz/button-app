import { StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import COLORS from "./constants/colors";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

export type StackParamList = {
  home: undefined;
  settings: { url: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: COLORS.black } }}>
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="settings"
              component={SettingsScreen}
              initialParams={{ url: "" }}
              options={{
                title: "Settings",
                headerStyle: { backgroundColor: COLORS.black },
                headerTitleStyle: { color: COLORS.white },
                headerTintColor: COLORS.white,
              }}
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

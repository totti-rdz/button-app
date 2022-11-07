import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../App";
import IconButton from "../components/IconButton";
import COLORS from "../constants/colors";
import Button from "../components/Button";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const { height: screenHeight } = useWindowDimensions();
  const settingIconSize = screenHeight * 0.1 * 0.5; // half of 10 percent of total screen height

  const goToSettings = () => navigation.navigate("settings");

  const handlePress = () => console.log("button pressed!");

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.nav}>
        <IconButton icon="settings-sharp" size={settingIconSize} color={COLORS.gray} onPress={goToSettings} />
      </View>
      <View style={styles.view}>
        <Button onPress={handlePress}>Tap me!</Button>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

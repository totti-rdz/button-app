import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import IconButton from "../components/IconButton";
import COLORS from "../constants/colors";
import BigButton from "../components/BigButton";
import { localStore } from "../services/LocalStore";
import ApiService from "../services/ApiServices";

type HomeScreenProp = NativeStackNavigationProp<StackParamList>;

const HomeScreen = () => {
  const [url, setUrl] = useState("");
  const navigation = useNavigation<HomeScreenProp>();
  const { height: screenHeight } = useWindowDimensions();
  const settingIconSize = screenHeight * 0.1 * 0.5; // half of 10 percent (nav height) of total screen height

  const goToSettings = () => navigation.navigate("settings", { url });

  const handlePress = () => {
    ApiService.sendRequestTo(url);
  };

  useFocusEffect(() => {
    const getUrl = async () => {
      const value = await localStore.readUrl();
      if (!value) {
        goToSettings();
        return;
      }
      setUrl(value);
    };
    getUrl();
  });

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.nav}>
        <IconButton icon="settings-sharp" size={settingIconSize} color={COLORS.gray} onPress={goToSettings} />
      </View>
      <View style={styles.view}>{url ? <BigButton onPress={handlePress}>Tap me!</BigButton> : <Text>Loading...</Text>}</View>
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

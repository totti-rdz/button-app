import { useEffect, useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import IconButton from "../components/IconButton";
import COLORS from "../constants/colors";
import BigButton from "../components/BigButton";
import ApiService from "../services/ApiServices";
import Status from "../components/Status";
import { targetUrl } from "../utils/urlUtils";
import { status } from "../utils/statusUtils";
import { filterFullfilledValues } from "../utils/promiseSettledUtils";

type HomeScreenProp = NativeStackNavigationProp<StackParamList>;

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [url, setUrl] = useState("");
  const navigation = useNavigation<HomeScreenProp>();
  const { height: screenHeight } = useWindowDimensions();
  const settingIconSize = screenHeight * 0.1 * 0.5; // half of 10 percent (nav height) of total screen height

  const goToSettings = () => navigation.navigate("settings", { url });

  const handlePress = async () => {
    setLoading(true);
    const response = await ApiService.sendRequestTo(url, [{ status: !isActive }]);
    if (response.status === "success") {
      setIsActive((current) => !current);
      await status.save(!isActive);
    }
    setLoading(false);
  };

  useFocusEffect(() => {
    const onFocus = async () => {
      const results = await Promise.allSettled([targetUrl.read(), status.read()]);
      const [url, localStatus] = filterFullfilledValues(results);
      if (!url) {
        goToSettings();
        return;
      }
      setUrl(url);
      setIsActive(localStatus === "true");
    };
    onFocus();
  });

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.nav}>
        {<IconButton icon="settings-sharp" size={settingIconSize} color={COLORS.gray} onPress={goToSettings} />}
      </View>
      <View style={styles.view}>
        <Status isActive={isActive} style={styles.status} />
        {loading ? (
          <BigButton onPress={() => console.log("loading...")}>loading...</BigButton>
        ) : (
          <BigButton onPress={handlePress}>Tap me!</BigButton>
        )}
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
  status: {
    marginBottom: 32,
  },
});

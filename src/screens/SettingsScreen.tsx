import { useLayoutEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { localStore } from "../services/LocalStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

type SettingsScreenProp = NativeStackNavigationProp<StackParamList>;

interface Props {
  route: RouteProp<StackParamList, "settings">;
}

const SettingsScreen = ({ route }: Props) => {
  const url = route.params.url;
  const navigation = useNavigation<SettingsScreenProp>();
  const [input, setInput] = useState(url || "");
  const [isUrlAvailable, setIsUrlAvailable] = useState(!!url);
  const handleChange = (input: string) => setInput(input);

  const goToHome = () => navigation.navigate("home");

  const saveUrl = async () => {
    if (!input) return;  
    await localStore.saveUrl(input);
    goToHome();
  };

  const handleReset = async () => {
    setInput("");
    setIsUrlAvailable(false);
    await localStore.resetUrl();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: isUrlAvailable,
    });
  }, [navigation, isUrlAvailable]);

  return (
    <KeyboardAvoidingView
      style={styles.view}
      behavior="height"
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      {/* <Text> wrapped in <View> to ensure smooth scrolling when showing keyboard...., */}
      <View>
        <Text style={styles.text}>Enter url:</Text>
      </View>
      <Input value={input} onChangeText={handleChange} />
      <View style={styles.buttonContainer}>
        <Button onPress={handleReset}>Reset</Button>
        <Button onPress={saveUrl}>Save</Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap-reverse",
  },
});

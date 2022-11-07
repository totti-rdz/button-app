import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";

const SettingsScreen = () => {
  const [input, setInput] = useState("");
  const handleChange = (input: string) => setInput(input);
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
});

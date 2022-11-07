import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";

const SettingsScreen = () => {
  const [input, setInput] = useState("");
  const handleChange = (input: string) => setInput(input);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Enter url:</Text>
      <Input value={input} onChangeText={handleChange} />
    </View>
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

import { StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.view}>
      <Text>SettingsScreen</Text>
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
});

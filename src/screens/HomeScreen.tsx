import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

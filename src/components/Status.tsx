import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import COLORS from "../constants/colors";

interface Props {
  isActive: boolean;
  style: StyleProp<ViewStyle>;
}

const Status = ({ isActive, style }: Props) => {
  return (
    <View style={[styles.view, style]}>
      <Text style={styles.text}>Status:</Text>
      <Text style={[styles.text, isActive ? styles.textActive : styles.textInactive]}>
        {isActive ? "active" : "inactive"}
      </Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  textActive: {
    color: COLORS.green,
  },
  textInactive: {
    color: COLORS.gray,
  },
});

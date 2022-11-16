import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../constants/colors";

interface Props {
  value: string;
  onChangeText: ((text: string) => void) | undefined;
}

const Input = ({ value, onChangeText }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} autoCorrect={false} autoCapitalize="none" />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    padding: 16,
    paddingBottom: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.white,
    ...Platform.select({
      android: {
        elevation: 4,
        overflow: "hidden",
      },
      ios: {
        shadowColor: COLORS.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
    }),
  },
  input: {
    height: 40,
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
    color: COLORS.gray,
    marginVertical: 8,
  },
});

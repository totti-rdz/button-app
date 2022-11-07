import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        android_ripple={{ color: "#fe4848" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.red,
    paddingVertical: 16,
    paddingHorizontal: 24,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
  },
});

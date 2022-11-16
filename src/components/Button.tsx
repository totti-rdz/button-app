import { useRef } from "react";
import { Animated, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import animateScaleEffect from "../helper/animateScaleEffect";
import COLORS from "../constants/colors";

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: Props) => {
  const selectedAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    animateScaleEffect(selectedAnim);
    onPress();
  };
  return (
    <Animated.View style={[{ transform: [{ scale: selectedAnim }] }]}>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
          android_ripple={{ color: COLORS.darkred }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.red,
    paddingVertical: 10,
    paddingHorizontal: 24,
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
  },
});

import { Animated } from "react-native";

const animateScaleEffect = (selectedAnim: Animated.Value) =>
  Animated.sequence([
    Animated.timing(selectedAnim, {
      toValue: 0.9,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(selectedAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }),
  ]).start();

export default animateScaleEffect;

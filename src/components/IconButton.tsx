import { GestureResponderEvent, OpaqueColorValue, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string | OpaqueColorValue | undefined;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const IconButton = ({ icon, size, color, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});

import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, size, onPress }) => {
   return (
      <Pressable
         style={({ pressed }) => pressed && styles.pressed}
         onPress={onPress}
      >
         <Ionicons name={name} color={color} size={size} />
      </Pressable>
   );
};

export default IconButton;

const styles = StyleSheet.create({
   pressed: {
      opacity: 0.75,
   },
});

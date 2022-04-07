import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

const OutlinedButton = ({ iconName, onPress, text }) => {
   return (
      <Pressable
         style={({ pressed }) => [styles.container, pressed && styles.pressed]}
         onPress={onPress}
      >
         <Ionicons name={iconName} color={Colors.primary500} size={20} />
         <Text style={styles.text}>{text}</Text>
      </Pressable>
   );
};

export default OutlinedButton;

const styles = StyleSheet.create({
   container: {
      borderColor: Colors.primary500,
      borderWidth: 1,
      width: "98%",
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "center",
   },
   pressed: {
      opacity: 0.75,
   },
   text: {
      color: Colors.primary500,
      marginLeft: 10,
   },
});

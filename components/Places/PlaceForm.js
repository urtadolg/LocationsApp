import { useState } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
   const [enteredTitle, setEnteredTitle] = useState();

   const onTitleChangeHandler = (enteredData) => {
      setEnteredTitle(enteredData);
   };

   return (
      <ScrollView>
         <View style={styles.inputContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
               value={enteredTitle}
               onChangeText={onTitleChangeHandler}
               style={styles.input}
            />
            <ImagePicker />
         </View>
      </ScrollView>
   );
};
export default PlaceForm;

const styles = StyleSheet.create({
   container: {},
   inputContainer: {
      padding: 30,
   },
   label: {
      color: Colors.primary500,
      marginBottom: 10,
   },
   input: {
      borderBottomColor: Colors.primary700,
      borderBottomWidth: 2,
      backgroundColor: Colors.primary100,
      height: 40,
      paddingHorizontal: 12,
   },
});

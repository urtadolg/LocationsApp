import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const PlacesList = ({ places }) => {
   if (!places || places.length === 0) {
      return (
         <View style={styles.notFoundContainer}>
            <Text style={styles.text}>
               No places added yet. Start adding some!
            </Text>
         </View>
      );
   }

   return (
      <FlatList
         data={places}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => <PlaceItem {...item} />}
      />
   );
};

export default PlacesList;

const styles = StyleSheet.create({
   notFoundContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      color: Colors.primary200,
   },
});

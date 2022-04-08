import { View, StyleSheet, Alert } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
   getCurrentPositionAsync,
   useForegroundPermissions,
   PermissionStatus,
} from "expo-location";
import { useNavigation } from "@react-navigation/native";

const LocationPicker = () => {
   const navigation = useNavigation();
   const [locationPermission, requestPermission] = useForegroundPermissions();

   const onConfirmHandler = async () => {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
   };

   const verifyPermissions = async () => {
      if (locationPermission.status === PermissionStatus.UNDETERMINED) {
         const requestResponse = await requestPermission();
         return requestResponse.granted;
      }

      if (locationPermission.status === PermissionStatus.DENIED) {
         Alert.alert(
            "Permission is missing",
            "This app need location permission in order to work.",
            [{ text: "OK", onPress: onConfirmHandler }]
         );
         return false;
      }

      return true;
   };

   const locateUserHandler = async () => {
      const hasPermission = await verifyPermissions();

      if (!hasPermission) {
         return;
      }

      const userLocation = await getCurrentPositionAsync();
      console.log(userLocation);
   };

   const pickOnMapHandler = () => {
      navigation.navigate("Map");
   };

   return (
      <View>
         <View style={styles.imageContainer}></View>
         <View style={styles.control}>
            <OutlinedButton
               text="Locate User"
               onPress={locateUserHandler}
               iconName="location"
               style={styles.button}
            />
            <OutlinedButton
               text="Pick on Map"
               onPress={pickOnMapHandler}
               iconName="map"
               style={styles.button}
            />
         </View>
      </View>
   );
};

export default LocationPicker;

const styles = StyleSheet.create({
   imageContainer: {
      width: "100%",
      height: 200,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: Colors.primary200,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
   },
   control: {
      flexDirection: "row",
      justifyContent: "space-around",
   },
   button: {
      width: "auto",
   },
});

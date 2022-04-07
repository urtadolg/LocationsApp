import { useState } from "react";
import { View, Button, Alert, Image, StyleSheet, Text } from "react-native";
import {
   launchCameraAsync,
   useCameraPermissions,
   PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = () => {
   const [pickedImage, setPickedImage] = useState();
   const [cameraPermissionInformation, requestPermission] =
      useCameraPermissions();

   const onAllowCameraPressHandler = async () => {
      const hasPermission = await requestPermission();

      return hasPermission.granted;
   };

   const verifyPermissions = async () => {
      if (
         cameraPermissionInformation.status === PermissionStatus.UNDETERMINED
      ) {
         const hasPermission = await requestPermission();

         return hasPermission.granted;
      }

      if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
         Alert.alert(
            "Insufficient Permissions",
            "You need to grant camera permissions to use this app.",
            [
               {
                  text: "OK",
                  onPress: onAllowCameraPressHandler,
               },
            ]
         );

         return false;
      }

      return true;
   };

   const onTakePhotoButtonPressHandler = async () => {
      const hasPermission = await verifyPermissions();

      if (!hasPermission) {
         return;
      }

      const image = await launchCameraAsync({
         allowsEditing: true,
         aspect: [16, 9],
         quality: 0.5,
      });

      setPickedImage(image.uri);
   };

   return (
      <View>
         <View style={styles.imageContainer}>
            {pickedImage ? (
               <Image source={{ uri: pickedImage }} style={styles.image} />
            ) : (
               <Text>No image taken yet.</Text>
            )}
         </View>
         <OutlinedButton
            text="Take Image"
            onPress={onTakePhotoButtonPressHandler}
            iconName="camera"
         />
      </View>
   );
};

export default ImagePicker;

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
   image: {
      width: "100%",
      height: "100%",
   },
});

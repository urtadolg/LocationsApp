import { useState, useLayoutEffect, useCallback } from "react";
import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

const Maps = ({ lat, lng, navigation }) => {
   const [coordinate, setCoordinate] = useState();
   lat = -21.9661417;
   lng = -46.9370776;

   const onTapMapHandler = (event) => {
      setCoordinate({
         lat: event.nativeEvent.coordinate.latitude,
         lng: event.nativeEvent.coordinate.longitude,
      });
   };

   const onHeaderButtonPressHandler = useCallback(() => {
      if (!coordinate) {
         Alert.alert("Pick a Location", "Tap the map to pick a location");
         return;
      }

      navigation.navigate("AddPlace", coordinate);
      console.log("voltou com as coordenadas: ", coordinate);
   }, [navigation, coordinate]);

   useLayoutEffect(() => {
      navigation.setOptions({
         headerRight: ({ tintColor }) => {
            return (
               <IconButton
                  onPress={onHeaderButtonPressHandler}
                  name="camera"
                  color={tintColor}
                  size={25}
               />
            );
         },
      });
   }, [onHeaderButtonPressHandler]);

   return (
      <MapView
         onPress={onTapMapHandler}
         style={styles.map}
         initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
         }}
      >
         {coordinate && (
            <Marker
               coordinate={{
                  latitude: coordinate.lat,
                  longitude: coordinate.lng,
               }}
            />
         )}
      </MapView>
   );
};

export default Maps;

const styles = StyleSheet.create({
   map: {
      flex: 1,
   },
});

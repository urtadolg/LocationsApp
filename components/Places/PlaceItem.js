import { View, Text, Image } from "react-native";

const PlaceItem = ({ imageURI, name, address, location }) => {
   return (
      <View>
         <View>
            <Image source={imageURI} />
         </View>
         <View>
            <Text>{name}</Text>
            <Text>{address}</Text>
         </View>
      </View>
   );
};

export default PlaceItem;

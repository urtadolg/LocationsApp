import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import { Colors } from "./constants/colors";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerStyle: { backgroundColor: Colors.primary500 },
               headerTintColor: Colors.gray700,
               contentStyle: { backgroundColor: Colors.gray700 },
            }}
         >
            <Stack.Screen
               name="AllPlaces"
               component={AllPlaces}
               options={({ navigation }) => ({
                  title: "Your Favorite Places",
                  headerRight: ({ tintColor }) => (
                     <IconButton
                        name="add"
                        color={tintColor}
                        size={24}
                        onPress={() => navigation.navigate("AddPlace")}
                     />
                  ),
               })}
            />
            <Stack.Screen
               name="AddPlace"
               component={AddPlace}
               options={{ title: "Add a new Place" }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({});

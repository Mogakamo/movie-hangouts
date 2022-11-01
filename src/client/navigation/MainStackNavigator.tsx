// imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../screens/HomeScreen";
import { screen_names } from "../constants/ScreenNames";
import BottomTabsNavigator from "./BottomTabsNavigator";
import MovieDetails from "../screens/movies/MovieDetails";

// Stack Navigator for the main app
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Homepage} /> */}
      {/* <Stack.Screen
        name={screen_names.HOMETABS}
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen name="MovieDetails"  component={MovieDetails}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

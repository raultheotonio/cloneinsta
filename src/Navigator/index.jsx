import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PublicNavigation from "./public";
import PrivateNavigation from "./private";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="publicNavigation" component={PublicNavigation} />
        <Stack.Screen name="privateNavigation" component={PrivateNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

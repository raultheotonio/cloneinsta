import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/FontAwesome";
import Feed from "../../screens/Feed";
import AddPhoto from "../../screens/AddPhoto";
import Profile from "../../screens/Profile";
import { OtherComponent } from "../../OtherComponent";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName;
    switch (route.name) {
      case "Feed":
        iconName = "home";
        break;
      case "AddPhoto":
        iconName = "camera";
        break;
      case "Profile":
        iconName = "user";
        break;
      default:
        break;
    }

    return <Icon name={iconName} size={30} color={color} />;
  },
});

const Home = () => (
  <Tab.Navigator initialRouteName="Feed" screenOptions={screenOptions}>
    <Tab.Screen
      options={{
        headerShown: false,
      }}
      name="Feed"
      component={Feed}
    />
    <Tab.Screen
      options={{
        headerShown: false,
      }}
      name="Foto"
      component={AddPhoto}
    />
    <Tab.Screen
      options={{
        headerShown: false,
      }}
      name="Perfil"
      component={Profile}
    />
  </Tab.Navigator>
);
const PrivateNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Home"
      component={Home}
    />
    <Stack.Screen name="OtherComponent" component={OtherComponent} />
  </Stack.Navigator>
);

export default PrivateNavigation;

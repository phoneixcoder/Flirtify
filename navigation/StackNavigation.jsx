import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import MenuButton from "../components/MenuButton/MenuButton";
import ProfileButton from "../components/ProfileButton/ProfileButton";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
            headerTitle: "",
            headerLeft: () => <MenuButton />,
            headerRight: () => <ProfileButton/>
            }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

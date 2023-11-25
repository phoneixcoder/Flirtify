import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import MenuButton from "../components/MenuButton/MenuButton";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import ProfileDetails from "../screens/ProfileDetails";
import Match from "../screens/Match";
import { TouchableOpacity } from "react-native";
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
          headerRight: () => <ProfileButton />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{
          headerTitle: "",
          headerLeft: () => {
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            />;
          },
        }}
      />
      <Stack.Screen
        name="Match"
        component={Match}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

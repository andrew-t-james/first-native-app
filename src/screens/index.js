/* eslint-disable react/display-name */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import { Text, View, Button, StyleSheet, AsyncStorage } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { Ionicons } from "@expo/vector-icons";

import Main from "../components/Main";
import SignInScreen from "./SignInScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";
import SharePlaceScreen from "./SharePlaceScreen";
import PlaceDetailScreen from "./PlaceDetailScreen";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: Main,
    SharePlace: SharePlaceScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        switch (routeName) {
          case "Home":
            iconName = "md-map";
            break;
          case "SharePlace":
            iconName = "md-share-alt";
            break;
          default:
            null;
        }
        return <Ionicons size={20} name={iconName} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Main
  }
});

const AppSwitchNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  Dashboard: {
    screen: AppDrawerNavigator
  }
});

export default createAppContainer(AppSwitchNavigator);

// createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: TabNavigator,
//     Auth: AuthStack
//   },
//   {
//     initialRouteName: "AuthLoading"
//   }
// )

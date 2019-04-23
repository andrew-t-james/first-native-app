/* eslint-disable react/display-name */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import { Text, View, Button, StyleSheet, AsyncStorage } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { Ionicons } from "@expo/vector-icons";

import Main from "../components/Main";
import SignInScreen from "./SignInScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";
import SharePlaceScreen from "./SharePlaceScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

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
            iconName = "md-map";
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

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: TabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

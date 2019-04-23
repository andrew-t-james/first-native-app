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
import SharePlace from "./SharePlace";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const TabNavigator = createBottomTabNavigator(
  {
    Home: Main,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options`;
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

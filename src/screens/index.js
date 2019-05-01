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

const DashboardTabNavigator = createBottomTabNavigator(
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
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardTabNavigator
    },
    PlaceDetail: {
      screen: PlaceDetailScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <Ionicons
          onPress={() => navigation.openDrawer()}
          style={{ paddingRight: 20 }}
          size={30}
          name="ios-menu"
        />
      )
    })
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStackNavigator
    }
  },
  {
    drawerPosition: "right"
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  SignIn: {
    screen: SignInScreen
  },
  Dashboard: {
    screen: AppDrawerNavigator
  }
});

export default createAppContainer(AppSwitchNavigator);

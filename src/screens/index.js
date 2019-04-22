import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "../components/Main";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main
  }
});

export default createAppContainer(AppNavigator);

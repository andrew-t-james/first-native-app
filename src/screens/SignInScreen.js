import React from "react";
import { View, Button, AsyncStorage } from "react-native";

class SignInScreen extends React.Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Sign in!"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <Button
          title="Sign up!"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
      </View>
    );
  }
}

export default SignInScreen;

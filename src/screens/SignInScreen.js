import React from "react";
import { View, Button, AsyncStorage } from "react-native";

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

export default SignInScreen;

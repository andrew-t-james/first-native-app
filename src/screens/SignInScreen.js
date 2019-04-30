import React from "react";
import { View, Button, AsyncStorage, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class SignInScreen extends React.Component {
  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login/Signup"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <TextInput placeholder="Your email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
        <Button
          title="Sign up!"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SignInScreen;

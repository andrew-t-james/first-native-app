import React, { Component } from "react";
import { View, Button, AsyncStorage, StyleSheet } from "react-native";
import DefaultInput from "../components/UI/DefaultInput";

class SignInScreen extends Component {
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
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Email" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>
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
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default SignInScreen;

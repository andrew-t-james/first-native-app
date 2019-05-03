import React, { Component } from "react";
import {
  View,
  Button,
  AsyncStorage,
  StyleSheet,
  ImageBackground
} from "react-native";
import DefaultInput from "../components/UI/DefaultInput";
import HeadingText from "../components/UI/HeadingText";
import ButtonWithBackground from "../components/UI/ButtonWithBackground";
import beach from "../assets/beach.jpg";

class SignInScreen extends Component {
  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <ImageBackground source={beach} style={styles.imageBackground}>
        <View style={styles.container}>
          <HeadingText style={styles.signInHeading}>
            <HeadingText>Please Login</HeadingText>
          </HeadingText>
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            Login/Signup
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            Sign up!
          </ButtonWithBackground>
        </View>
      </ImageBackground>
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
  },
  imageBackground: {
    flex: 1,
    width: "100%"
  },
  signInHeading: {
    color: "#000"
  }
});

export default SignInScreen;

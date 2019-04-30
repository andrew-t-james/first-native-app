import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "#eee",
    borderWidth: 1,
    padding: 10,
    margin: 8
  }
});

export default DefaultInput;

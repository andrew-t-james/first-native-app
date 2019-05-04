import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={() => props.onPress()}>
    <View
      style={[styles.button, props.style, { backgroundColor: props.color }]}
    >
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 4
  }
});

export default ButtonWithBackground;

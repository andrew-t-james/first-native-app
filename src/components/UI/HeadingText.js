import React from "react";
import { Text, StyleSheet } from "react-native";

const HeadingText = props => {
  return (
    <Text {...props} style={[styles.heading, props.styles]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "400"
  }
});

export default HeadingText;

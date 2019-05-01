import React from "react";
import { Text, StyleSheet } from "react-native";

const MainText = props => {
  return (
    <Text {...props} style={[styles.mainText, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: "#bbb"
  }
});

export default MainText;

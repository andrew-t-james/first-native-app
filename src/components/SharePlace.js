import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SharePlace = () => {
  return (
    <View style={styles.container}>
      <Text>Share Place</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SharePlace;

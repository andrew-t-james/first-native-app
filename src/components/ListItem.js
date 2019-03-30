import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ListItem = ({ placeName }) => (
  <View style={styles.listItem}>
    <Text>{placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10
  }
});

export default ListItem;

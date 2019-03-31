import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ListItem = ({ placeName, onItemPressed }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
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

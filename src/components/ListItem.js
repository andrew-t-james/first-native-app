import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const ListItem = ({ placeName, placeImage, onItemPressed }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image
        source={placeImage}
        resizeMethod="contain"
        style={styles.placeImage}
      />
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 10,
    maxHeight: 30,
    width: 30
  }
});

export default ListItem;

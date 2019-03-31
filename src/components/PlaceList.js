import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const PlaceList = ({ places, deletePlace }) => {
  const placesOutput = places.map((place, index) => (
    <ListItem
      placeName={place}
      key={index}
      onItemPressed={() => deletePlace(index)}
    />
  ));
  return <View style={styles.listContainer}>{placesOutput}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;

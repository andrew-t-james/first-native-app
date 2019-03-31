import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ListItem from "./ListItem";

const PlaceList = ({ places, deletePlace }) => {
  const placesOutput = places.map((place, index) => (
    <ListItem
      placeName={place}
      key={index}
      onItemPressed={() => deletePlace(index)}
    />
  ));
  return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;

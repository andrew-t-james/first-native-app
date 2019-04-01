import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

const PlaceList = ({ places, deletePlace }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          placeImage={info.item.image}
          placeName={info.item.name}
          onItemPressed={() => deletePlace(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;

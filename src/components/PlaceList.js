import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

const PlaceList = ({ places, onItemSelected }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          key={`${info.item.name}-${info.item.key}`}
          placeImage={info.item.image}
          placeName={info.item.name}
          onItemPressed={() => onItemSelected(info.item.key)}
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

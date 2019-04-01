import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";

import placeImage from "./src/assets/beach.jpg";

export default class App extends React.Component {
  state = {
    places: []
  };

  onPlaceAdded = placeName => {
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random(),
        name: placeName.trim(),
        image: placeImage
      })
    }));
  };

  deletePlace = key => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => place.key !== key)
    }));
  };

  render() {
    const { places } = this.state;

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAdded} />
        <PlaceList places={places} deletePlace={this.deletePlace} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

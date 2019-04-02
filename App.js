import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail";

import placeImage from "./src/assets/beach.jpg";

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  onPlaceAdded = placeName => {
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random(),
        name: placeName.trim(),
        image: {
          uri: "https://bit.ly/2FZA8gE"
        }
      })
    }));
  };

  placeSelectedHandler = key => {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(place => place.key === key)
    }));
    // this.setState(prevState => ({
    //   places: prevState.places.filter(place => place.key !== key)
    // }));
  };

  render() {
    const { places, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={selectedPlace} />
        <PlaceInput onPlaceAdded={this.onPlaceAdded} />
        <PlaceList places={places} onItemSelected={this.placeSelectedHandler} />
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

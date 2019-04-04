import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./PlaceInput";
import PlaceList from "./PlaceList";
import PlaceDetail from "./PlaceDetail";

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
  };

  onItemDeleted = () => {
    this.setState(prevState => ({
      places: prevState.places.filter(
        place => place.key !== prevState.selectedPlace.key
      ),
      selectedPlace: null
    }));
  };

  onModalClose = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    const { places, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onItemDeleted={this.onItemDeleted}
          onModalClose={this.onModalClose}
        />
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

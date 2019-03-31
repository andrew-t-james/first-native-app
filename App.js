import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem";
import PlaceInput from "./src/components/PlaceInput";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameUpdater = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;
    if (placeName.trim() === "") {
      return;
    }

    this.setState(prevState => ({
      places: prevState.places.concat(prevState.placeName.trim()),
      placeName: ""
    }));
  };

  deletePlace = index => {
    this.setState(prevState => ({
      places: prevState.places.filter((place, currIndex) => currIndex !== index)
    }));
  };
  render() {
    const { placeName, places } = this.state;

    return (
      <View style={styles.container}>
        <PlaceInput
          placeNameUpdater={this.placeNameUpdater}
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={placeName}
        />
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
  },
  listContainer: {
    width: "100%"
  }
});

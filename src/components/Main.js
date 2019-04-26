import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import PlaceList from "./PlaceList";
import { addPlace, deletePlace } from "../store/actions/";
import { withNavigation } from "react-navigation";

class Main extends Component {
  onItemSelected = async key => {
    const selectedPlace = this.props.places.find(place => place.key === key);
    this.props.navigation.navigate("PlaceDetail", {
      selectedPlace: selectedPlace
    });
  };

  render() {
    const { places } = this.props;

    return (
      <View style={styles.container}>
        <PlaceList places={places} onItemSelected={this.onItemSelected} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => ({
  places: state.places.places
});

// const mapDispatchToProps = dispatch => ({
//   onAddPlace: name => dispatch(addPlace(name)),
//   onItemDeleted: () => dispatch(deletePlace())
// });

export default withNavigation(connect(mapStateToProps)(Main));

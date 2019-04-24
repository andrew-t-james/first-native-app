import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import PlaceList from "./PlaceList";
import {
  addPlace,
  selectPlace,
  deselectPlace,
  deletePlace
} from "../store/actions/";

class Main extends Component {
  render() {
    const { places } = this.props;

    return (
      <View style={styles.container}>
        <PlaceList places={places} onItemSelected={this.props.onItemSelected} />
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
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: name => dispatch(addPlace(name)),
  onItemDeleted: () => dispatch(deletePlace()),
  onItemSelected: key => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

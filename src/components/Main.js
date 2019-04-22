import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./PlaceInput";
import PlaceList from "./PlaceList";
import PlaceDetail from "./PlaceDetail";
import {
  addPlace,
  selectPlace,
  deselectPlace,
  deletePlace
} from "../store/actions/";

class Main extends React.Component {
  render() {
    const { places, selectedPlace } = this.props;

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onItemDeleted={this.props.onItemDeleted}
          onModalClose={this.props.onDeselectPlace}
        />
        <PlaceInput onPlaceAdded={this.props.onAddPlace} />
        <PlaceList places={places} onItemSelected={this.props.onItemSelected} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
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
  onItemSelected: key => dispatch(selectPlace(key.toString())),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

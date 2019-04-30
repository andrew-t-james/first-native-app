import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import PlaceList from "./PlaceList";
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
        {places.length ? (
          <PlaceList places={places} onItemSelected={this.onItemSelected} />
        ) : (
          <Text>No Places to share :( </Text>
        )}
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

export default withNavigation(connect(mapStateToProps)(Main));

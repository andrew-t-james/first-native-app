import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";

import PlaceInput from "../components/PlaceInput";
import DefaultInput from "../components/UI/DefaultInput";
import { addPlace } from "../store/actions";

const SharePlace = ({ onPlaceAdded }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Share Place</Text>
      <View style={styles.placeHolder}>
        <Text>Image Preview</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Pick Image" />
      </View>
      <View style={styles.placeHolder}>
        <Text>Map</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Locate me" />
      </View>
      <DefaultInput placeholder="Place Menu" />
      <View style={styles.buttonWrapper}>
        <Button title="Share this place" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    marginTop: 20
  },
  placeHolder: {
    borderWidth: 1,
    width: "100%",
    height: 250,
    backgroundColor: "#eee"
  },
  buttonWrapper: {
    margin: 10
  }
});

const mapDispatchToProps = dispatch => ({
  onPlaceAdded: placeName => dispatch(addPlace(placeName))
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlace);

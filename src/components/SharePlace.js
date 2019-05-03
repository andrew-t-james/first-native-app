import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";

import PlaceInput from "../components/PlaceInput";
import DefaultInput from "../components/UI/DefaultInput";
import { addPlace } from "../store/actions";

const SharePlace = ({ onPlaceAdded }) => {
  return (
    <View style={styles.container}>
      <Text>Share Place</Text>
      <View>
        <Text>Image Preview</Text>
      </View>
      <Button title="Pick Image" />
      <View>
        <Text>Map</Text>
      </View>
      <Button title="Locate me" />
      <TextInput placeholder="Place Menu" />
      <Button title="Share this place" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  }
});

const mapDispatchToProps = dispatch => ({
  onPlaceAdded: placeName => dispatch(addPlace(placeName))
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlace);

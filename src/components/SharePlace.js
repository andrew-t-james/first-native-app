import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";

import PlaceInput from "../components/PlaceInput";
import { addPlace } from "../store/actions";

const SharePlace = ({ onPlaceAdded }) => {
  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={onPlaceAdded} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => ({
  onPlaceAdded: placeName => dispatch(addPlace(placeName))
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlace);

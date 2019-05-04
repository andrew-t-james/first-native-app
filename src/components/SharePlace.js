import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";

import DefaultInput from "../components/UI/DefaultInput";
import HeadingText from "../components/UI/HeadingText";
import MainText from "../components/UI/MainText";
import { addPlace } from "../store/actions";

const SharePlace = ({ onPlaceAdded }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MainText>
        <HeadingText>Share Place</HeadingText>
      </MainText>
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
        {/* <Button onPress={() => onPlaceAdded()} title="Share this place" /> */}
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
    padding: 20,
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

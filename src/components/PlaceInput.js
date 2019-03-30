import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const PlaceInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      name="placeName"
      value={props.placeName}
      onChangeText={props.placeNameUpdater}
      style={styles.placeInput}
    />
    <Button
      style={styles.placeButton}
      onPress={props.placeSubmitHandler}
      title="Add"
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  placeInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameUpdater = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({ placeName: "" });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          name="placeName"
          value={this.state.placeName}
          onChangeText={this.placeNameUpdater}
          style={styles.placeInput}
        />
        <Button
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          title="Add"
        />
      </View>
    );
  }
}

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

import React from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameUpdater = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;
    if (placeName.trim() === "") {
      return;
    }

    this.setState(prevState => ({
      places: prevState.places.concat(prevState.placeName)
    }));
  };

  render() {
    const { placeName, places } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            name="placeName"
            value={placeName}
            onChangeText={this.placeNameUpdater}
            style={styles.placeInput}
          />
          <Button
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            title="Add"
          />
        </View>
        <View>
          {places.map((place, index) => (
            <Text key={index}>{place}</Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
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

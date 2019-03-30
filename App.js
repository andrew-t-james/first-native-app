import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class App extends React.Component {
  state = {
    placeName: ""
  };

  placeNameUpdater = event => {
    this.setState({
      placeName: event.target.value
    });
  };

  render() {
    const { placeName } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          name="placeName"
          value={placeName}
          onChange={this.placeNameUpdater}
          style={{
            width: 300,
            borderColor: "black",
            borderWidth: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

class PlaceDetail extends Component {
  render() {
    const { name, image } = this.props.navigation.getParam("selectedPlace");
    return (
      <View style={styles.container}>
        <View>
          <Image source={image} style={styles.placeImage} />
          <Text style={styles.placeName}>{name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Ionicons size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 80
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    margin: 20
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default withNavigation(PlaceDetail);

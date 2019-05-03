import React from "react";
import { Touchable, View, Text, StyleSheet } from "react-native";

const ButtonWithBackground = props => {
  return (
    <Touchable onPress={() => props.onPress}>
      <View style={styles.button}>
        <Text>{props.children}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {}
});
export default ButtonWithBackground;

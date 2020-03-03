import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text>Ma santé</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

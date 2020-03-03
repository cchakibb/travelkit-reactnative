import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MyVaccinationCard() {
  const [getMoreInfo, setGetMoreInfo] = useState();
  return (
    <View style={styles.container}>
      <Text>This is the MyVaccinationCard component</Text>
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

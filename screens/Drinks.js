import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Drinks({ userToken, route }) {
  const { params } = useRoute();
  console.log("Drinks = ", route.params);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Vasy molo sur la boisson</Text>
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

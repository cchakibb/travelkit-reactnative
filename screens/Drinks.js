import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Drinks({ userToken }) {
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

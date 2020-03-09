import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Ticks({ userToken }) {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>En savoir plus</Text>
      </TouchableOpacity>
      <Text>Attention aux Tiques</Text>
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

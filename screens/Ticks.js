import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Ticks({ userToken, route }) {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  const { params } = useRoute();
  console.log("Ticks =", route.params.passParams);
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

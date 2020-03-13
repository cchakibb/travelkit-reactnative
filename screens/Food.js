import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Food({ userToken, route }) {
  const { params } = useRoute();
  console.log("Food = ", route.params);

  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Si ton Kebab n'est pas bien passé, appel le 15 !</Text>
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

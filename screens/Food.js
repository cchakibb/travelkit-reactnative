import React, { useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";


export default function Food({ userToken, route }) {
  const { params } = useRoute();
  console.log("Food = ", route.params);

  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <HeaderTopImage
        title={"Alimentation"}
        page="EatAndDrink"
      ></HeaderTopImage>
      <View style={{ flex: 1 }}>
        <Text>Si ton Kebab n'est pas bien passé, appel le 15 !</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

import React from "react";

import { useNavigation, useRoute } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";


export default function Drinks({ userToken, route }) {
  const { params } = useRoute();
  console.log("Drinks = ", route.params);

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <HeaderTopImage title={"Boisson"} page="EatAndDrink"></HeaderTopImage>
      <View style={styles.container}>
        <Text>Vasy molo sur la boisson</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

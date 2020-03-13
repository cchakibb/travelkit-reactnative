import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Drinks({ userToken }) {
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

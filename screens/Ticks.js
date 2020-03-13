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
      <HeaderTopImage
        title={"Tiques"}
        page="MosquitoesAndTicks"
      ></HeaderTopImage>
      <View style={styles.container}>
        <Text>Tiques</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

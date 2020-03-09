import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import InputDestination from "../components/InputDestination";

export default function Destination({ userToken }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Ma Destination"}></HeaderTopImage>
        <InputDestination></InputDestination>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Food({ userToken }) {
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

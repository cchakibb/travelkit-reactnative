import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";

export default function Swimming() {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Baignade"}></HeaderTopImage>
        <BtnInfo title={"En savoir plus"}></BtnInfo>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";

export default function Sun({ userToken }) {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Soleil"}></HeaderTopImage>

        <BtnInfo title={"Quels sont les risques ? "}></BtnInfo>
        <BtnInfo title={"Comment bien se protéger ?"}></BtnInfo>
        <BtnInfo title={"Comment choisir sa crème scolaire ?"}></BtnInfo>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

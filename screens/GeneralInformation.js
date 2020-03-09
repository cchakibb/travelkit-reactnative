import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";
import { HitTestResultTypes } from "expo/build/AR";

export default function GeneralInformation({ userToken }) {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Infos générales"}></HeaderTopImage>
        <BtnInfo title={"Dengue"}></BtnInfo>
        <BtnInfo title={"Paludisme"}></BtnInfo>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

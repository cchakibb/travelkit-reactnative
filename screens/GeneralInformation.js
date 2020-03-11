import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";
import { HitTestResultTypes } from "expo/build/AR";
import axios from "axios";

export default function GeneralInformation({ userToken, route }) {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const { params } = useRoute();
  /* console.log("Params GENERALINFORMATION ", route); */
  const id = route.params.travelId;
  // route.params.travelId

  const fetchData = async () => {
    const response = await axios.get(
      `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/generalinfo`,
      {
        headers: {
          Authorization: "Bearer " + userToken
        }
      }
    );
  };

  return (
    // TODO remember isLoading ?
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Infos générales"} page="Daily"></HeaderTopImage>
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

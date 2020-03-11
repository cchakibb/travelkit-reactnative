import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";

export default function Swimming({ userToken }) {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Baignade"} page="Daily"></HeaderTopImage>
        <View>
          <Text style={styles.text}>
            En résumé : je me renseigne localement, je respecte strictement les
            consignes de sécurité et les panneaux
          </Text>
        </View>
        <BtnInfo title={"En savoir plus"}></BtnInfo>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  text: {
    fontSize: 16,
    height: 80,
    marginTop: 17,
    marginLeft: 25,
    marginRight: 45,
    marginBottom: 13,
    lineHeight: 23
  }
});

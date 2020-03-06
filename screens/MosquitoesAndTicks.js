import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnIcone from "../components/BtnIcone";

export default function MosquitoesAndTicks() {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderTopImage title={"Moustiques et tiques"}></HeaderTopImage>
      <BtnIcone
        title={"Moustiques"}
        iconeBtn={require("../assets/general/icone-quotidien/moustique.png")}
        page="Mosquitoes"
      ></BtnIcone>
      <BtnIcone
        title={"Tiques"}
        iconeBtn={require("../assets/quotidien/animaux/tique.png")}
        page="Ticks"
      ></BtnIcone>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

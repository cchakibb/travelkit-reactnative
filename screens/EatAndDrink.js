import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnIcone from "../components/BtnIcone";

export default function EatAndDrink() {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderTopImage title={"Boire et manger"}></HeaderTopImage>
      <BtnIcone
        title={"L'alimentation"}
        iconeBtn={require("../assets/general/icone-quotidien/assiette.png")}
        page="Food"
      ></BtnIcone>
      <BtnIcone
        title={"La boisson"}
        iconeBtn={require("../assets/general/icone-quotidien/boisson.png")}
        page="Drinks"
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

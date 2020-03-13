import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnIcone from "../components/BtnIcone";
import { useNavigation, useRoute } from "@react-navigation/core";

export default function EatAndDrink({ userToken }) {
  const { params } = useRoute();

  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Boire et manger"} page="Daily"></HeaderTopImage>
        <View>
          <Text style={styles.text}>
            Pour ce voyage, il y a un rique d'infection à cause de :
          </Text>
        </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  text: {
    fontSize: 16,
    height: 55,
    marginTop: 15,
    marginLeft: 25,
    marginRight: 45,
    marginBottom: 13,
    lineHeight: 23
  }
});

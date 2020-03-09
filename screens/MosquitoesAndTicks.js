import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnIcone from "../components/BtnIcone";

export default function MosquitoesAndTicks() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Moustiques et tiques"}></HeaderTopImage>
        <View>
          <Text style={styles.text}>Pour ce voyage, il y a un rique de :</Text>
        </View>
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
    marginRight: 45
  }
});

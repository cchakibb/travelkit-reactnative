import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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

export default function MosquitoesAndTicks({ userToken, route }) {
  const navigation = useNavigation();
  const { params } = useRoute();
  console.log("MosquitoesAndTicks = ", route.params);

  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage
          title={"Moustiques et tiques"}
          page="Daily"
        ></HeaderTopImage>
        <View>
          <Text style={styles.text}>Pour ce voyage, il y a un rique de :</Text>
        </View>
        <BtnIcone
          title={"Moustiques"}
          iconeBtn={require("../assets/general/icone-quotidien/moustique.png")}
          page="Mosquitoes"
          passParams={route.params.travelId}
        ></BtnIcone>
        <BtnIcone
          title={"Tiques"}
          iconeBtn={require("../assets/quotidien/animaux/tique.png")}
          page="Ticks"
          passParams={route.params.travelId}
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

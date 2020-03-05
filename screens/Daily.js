import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Daily() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderTopImage title={"Mon quotidien"}></HeaderTopImage>
        <View>
          <Text style={styles.textPerou}>Pérou: 14/06/2019 - 16/07/2019</Text>
        </View>
        <View style={styles.iconeMenu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GeneralInformation");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/infos.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Infos générales</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EatAndDrink");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/repas.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Boire et manger</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconeMenu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MosquitoesAndTicks");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/moustique.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Moustiques et</Text>
            <Text style={styles.textIcone}>tiques</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Sun");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/soleil.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Soleil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconeMenu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Swimming");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/baignade.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Baignade</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Animals");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/animaux.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Animaux</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconeMenu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Quizz");
            }}
          >
            <Image
              source={require("../assets/general/icone-quotidien/quizz.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
            <Text style={styles.textIcone}>Quizz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  iconeMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 11,
    marginLeft: 5,
    marginRight: 5
  },
  textIcone: {
    textAlign: "center",
    fontSize: 17
  },
  textPerou: {
    marginBottom: 8,
    fontSize: 15,
    color: "#3794B5",
    textAlign: "center"
  }
});

import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import moment from "moment";
require("moment/locale/fr");

export default function Daily({ userToken }) {
  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderTopImage title={"Mon quotidien"} page="Home"></HeaderTopImage>
        <View>
          <Text style={styles.textPerou}>
            {params.travelDestination} - Du{" "}
            {moment(params.travelDeparture).format("L")} au{" "}
            {moment(params.travelReturn).format("L")}
          </Text>
        </View>
        <View style={styles.iconeMenu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GeneralInformation", {
                screen: "TabGeneralInformation",
                travelId: params.travelId
              });
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
              navigation.navigate("EatAndDrink", {
                screen: "TabEatAndDrink",
                travelId: params.travelId
              });
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
              navigation.navigate("MosquitoesAndTicks", {
                screen: "TabMosquitoesAndTicks",
                travelId: params.travelId
              });
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
              navigation.navigate("Sun", {
                screen: "TabSun",
                travelId: params.travelId
              });
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
              navigation.navigate("Swimming", {
                screen: "TabSwimming",
                travelId: params.travelId
              });
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
              navigation.navigate("Animals", {
                screen: "TabAnimals",
                travelId: params.travelId
              });
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
              navigation.navigate("Quizz", {
                screen: "TabQuizz",
                travelId: params.travelId
              });
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

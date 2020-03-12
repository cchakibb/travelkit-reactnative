import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ userToken }) {
  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <ImageBackground
      source={require("../assets/general/background/accueil.png")}
      style={{
        width: "100%",
        height: "100%",
        opacity: "1"
      }}
    >
      <View style={styles.logoProfil}>
        <Image
          source={require("../assets/general/logo/logo.png")}
          style={{ width: 60, height: 60 }}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserProfile", {
              travelDestination: params.travelDestination,
              travelDeparture: params.travelDeparture,
              travelReturn: params.travelReturn,
              travelId: params.travelId
            });
          }}
        >
          <FontAwesome name="bars" size={55} color="#3794B5" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 150,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 60
          }}
        >
          Travel kit
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Checklist");
          }}
          style={styles.iconeMenu}
        >
          <Image
            source={require("../assets/general/icone-accueil/checklist.png")}
            style={styles.icone}
          ></Image>
          <Text style={styles.text}> Ma checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealthProfile");
          }}
          style={styles.iconeMenu}
        >
          <Image
            source={require("../assets/general/icone-accueil/sante.png")}
            style={styles.iconeMilieu}
          ></Image>
          <Text style={styles.text}> Mon profil santé</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Daily", {
              travelDestination: params.travelDestination,
              travelDeparture: params.travelDeparture,
              travelReturn: params.travelReturn,
              travelId: params.travelId
            });
          }}
          style={styles.iconeMenu}
        >
          <Image
            source={require("../assets/general/icone-accueil/checklist.png")}
            style={styles.iconeMilieu}
          ></Image>
          <Text style={styles.text}> Mon quotidien</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.iconeMenu}
        >
          <Image
            source={require("../assets/general/icone-accueil/checklist.png")}
            style={styles.icone}
          ></Image>
          <Text style={styles.text}> Mes documents</Text>
        </TouchableOpacity>
        {/* <Text>itemId: {JSON.stringify(travelDestination)}</Text> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 70
  },
  text: {
    padding: 15,
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  logoProfil: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 25
  },
  iconeMenu: {
    width: 400,
    flexDirection: "row",
    marginBottom: 3,
    padding: 5,
    padding: 15
  },
  icone: {
    width: 55,
    height: 55,
    marginLeft: 35,
    borderWidth: 2,
    borderColor: "#3794B5",
    borderRadius: 50
  },
  iconeMilieu: {
    width: 55,
    height: 55,
    marginLeft: 95,
    borderWidth: 2,
    borderColor: "#3794B5",
    borderRadius: 50
  }
});

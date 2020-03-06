import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function MyHealthProfile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderTopImage title={"Mon profil santé"}></HeaderTopImage>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealth");
          }}
          style={styles.btn}
        >
          <Image
            style={styles.icone}
            source={require("../assets/general/icone-sante/etat_de_sante.png")}
          ></Image>
          <Text style={styles.onglet}>Ma santé</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyVaccinationCard");
          }}
          style={styles.btn}
        >
          <Image
            style={styles.icone}
            source={require("../assets/general/icone-sante/vaccin.png")}
          ></Image>
          <Text style={styles.onglet}>Carnet de vaccination</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealthProfile");
          }}
          style={styles.btn}
        >
          <Image
            style={styles.icone}
            source={require("../assets/general/icone-sante/medicament.png")}
          ></Image>
          <Text style={styles.onglet}>Médicaments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealthProfile");
          }}
          style={styles.btn}
        >
          <Image
            style={styles.icone}
            source={require("../assets/general/icone-sante/trousse_de_secours.png")}
          ></Image>
          <Text style={styles.onglet}>Trousse de secours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealthProfile");
          }}
          style={styles.btn}
        >
          <Image
            style={styles.icone}
            source={require("../assets/general/icone-sante/consultation.png")}
          ></Image>
          <Text style={styles.onglet}>Consultation médicale</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealthProfile");
          }}
          style={styles.btn}
        >
          <Image
            style={styles.icone}
            source={require("../assets/general/icone-sante/couverture_sante.png")}
          ></Image>

          <Text style={styles.onglet}>Couverture santé</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  onglet: {
    fontSize: 20,
    textAlign: "center",
    color: "#3794B5"
  },
  btn: {
    height: 58,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginHorizontal: 25,
    borderColor: "#3794B5",
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid"
  },
  icone: {
    width: 55,
    height: 55,
    marginTop: 23,
    marginRight: 330
  }
});

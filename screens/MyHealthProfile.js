import React from "react";
import { useNavigation } from "@react-navigation/core";
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

export default function MyHealthProfile({ userToken }) {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Mon profil santé"} page="Home"></HeaderTopImage>
        <View style={{ marginTop: 32 }}>
          <BtnIcone
            title={"Ma santé"}
            iconeBtn={require("../assets/general/icone-sante/etat_de_sante.png")}
            page="MyHealth"
          ></BtnIcone>
          <BtnIcone
            title={"Carnet de vaccination"}
            iconeBtn={require("../assets/general/icone-sante/vaccin.png")}
            page="MyVaccinationCard"
          ></BtnIcone>
          <BtnIcone
            title={"Médicaments"}
            iconeBtn={require("../assets/general/icone-sante/medicament.png")}
          ></BtnIcone>
          <BtnIcone
            title={"Trousse de secours"}
            iconeBtn={require("../assets/general/icone-sante/trousse_de_secours.png")}
          ></BtnIcone>
          <BtnIcone
            title={"Consultation médicale"}
            iconeBtn={require("../assets/general/icone-sante/consultation.png")}
          ></BtnIcone>
          <BtnIcone
            title={"Couverture santé"}
            iconeBtn={require("../assets/general/icone-sante/couverture_sante.png")}
          ></BtnIcone>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

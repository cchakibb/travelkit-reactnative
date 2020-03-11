import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnSwitch from "../components/BtnSwitch";

export default function Checklist({ userToken }) {
  return (
    <ScrollView>
      <View>
        <HeaderTopImage title={"Ma Checklist"} page="Home"></HeaderTopImage>
        <View style={{ marginTop: 27 }}>
          <BtnSwitch title={"Rendez-vous chez le médecin"}></BtnSwitch>
          <BtnSwitch title={"Passeport"}></BtnSwitch>
          <BtnSwitch title={"Visa"}></BtnSwitch>
          <BtnSwitch title={"Billet d'avion"}></BtnSwitch>
          <BtnSwitch title={"Hébergement"}></BtnSwitch>
          <BtnSwitch title={"Transport"}></BtnSwitch>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 9 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>4 Juin</Text>
            <Text style={{ marginLeft: 21, fontSize: 17, marginBottom: 9 }}>
              Date limite pour les vaccins
            </Text>
          </View>
          <BtnSwitch title={"Liste des courses"}></BtnSwitch>
          <BtnSwitch title={"Moyens de paiement"}></BtnSwitch>
          <BtnSwitch title={"Souscrire à une assurance santé"}></BtnSwitch>
          <BtnSwitch title={"Enrengistré les documents important"}></BtnSwitch>
          <BtnSwitch title={"Adaptateur international"}></BtnSwitch>
          <BtnSwitch title={"Apllication utile Travel kit"}></BtnSwitch>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 9 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>14 Juin</Text>
            <Text style={{ marginLeft: 14, fontSize: 17, marginBottom: 9 }}>
              Départ
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import ChecklistTraveler from "../components/ChecklistTraveler";

export default function MyTravelerProfile({ userToken }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Mon profil voyageur"}></HeaderTopImage>
        <Text style={styles.text}>Mes habitudes de voyages :</Text>
        <ChecklistTraveler
          title={"Je mange souvent au restaurant"}
        ></ChecklistTraveler>
        <ChecklistTraveler
          title={"Je dors souvent dans des hôtels"}
        ></ChecklistTraveler>
        <ChecklistTraveler
          title={"De reserver un guide touristique"}
        ></ChecklistTraveler>
        <ChecklistTraveler title={"De prévoir un massage"}></ChecklistTraveler>
        <Text style={styles.text}>Pour ce voyage je prévois :</Text>
        <ChecklistTraveler
          title={"D'aller à plus de 3000m d'altitude"}
        ></ChecklistTraveler>
        <ChecklistTraveler title={"De me baigner"}></ChecklistTraveler>
        <ChecklistTraveler
          title={"D'aller sous les palmiers"}
        ></ChecklistTraveler>
        <ChecklistTraveler
          title={"De faire un footing et de la musculation"}
        ></ChecklistTraveler>
        <ChecklistTraveler title={"De faire de la plongée"}></ChecklistTraveler>
        <ChecklistTraveler title={"De faire du vtt "}></ChecklistTraveler>
        <ChecklistTraveler
          title={"D'aller au marché local"}
        ></ChecklistTraveler>
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
    color: "#3794B5",
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15
  }
});

import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import ChecklistTraveler from "../components/ChecklistTraveler";

export default function MyTravelerProfile({ userToken }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage
          title={"Mon profil voyageur"}
          page="UserProfile"
        ></HeaderTopImage>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 26,
            marginBottom: 5,
            marginTop: 10
          }}
        >
          <Image
            source={require("../assets/general/logo/adult-attractive-beautiful-beauty-415829.jpg")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          ></Image>
          <View style={{ justifyContent: "center", marginLeft: 20 }}>
            <Text
              style={{ fontSize: 20, color: "#3794B5", fontWeight: "bold" }}
            >
              Anna Martin
            </Text>
          </View>
        </View>
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
        <ChecklistTraveler
          title={"De faire un chateau de sable"}
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

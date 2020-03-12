import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function UserProfile() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.logoProfil}>
        <Image
          source={require("../assets/general/logo/logo.png")}
          style={{ width: 60, height: 60 }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <FontAwesome name="bars" size={55} color="#3794B5" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 350,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={require("../assets/general/logo/adult-attractive-beautiful-beauty-415829.jpg")}
          style={styles.photoProfil}
        />
        <View style={{ flexDirection: "row", marginTop: 23 }}>
          <Text style={{ fontSize: 20, color: "white" }}>Anna</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {" "}
            Martin
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyTravelerProfile");
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "white" }}>
              Mon profil voyageur
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20
          }}
        >
          Mes voyages prévus :
        </Text>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginTop: 10
            }}
          >
            France
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginTop: 10
            }}
          >
            Canada
          </Text>
        </View>
      </View>
      <View style={{ height: 70, backgroundColor: "black" }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "right",
            marginRight: 25
          }}
        >
          Mentions légales
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoProfil: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 40
  },
  photoProfil: {
    width: 180,
    height: 180,
    borderRadius: 100
  }
});

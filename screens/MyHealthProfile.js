import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function MyHealthProfile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealth");
        }}
      >
        <Text>Ma santé</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyVaccinationCard");
        }}
      >
        <Text>Carnet de vaccination</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealthProfile");
        }}
      >
        <Text>Médicaments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealthProfile");
        }}
      >
        <Text>Trousse de secours</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealthProfile");
        }}
      >
        <Text>Consultation médicale</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealthProfile");
        }}
      >
        <Text>Couverture santé</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
});

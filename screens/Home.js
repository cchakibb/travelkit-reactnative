import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, ImageBackground, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Ma checklist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealthProfile");
        }}
      >
        <Text>Mon profil santé</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Daily");
        }}
      >
        <Text>Mon quotidien</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Mes documents</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textvoyage: {
    color: "#3794B5"
  },
  logo: {
    padding: 10,
    marginTop: 25
  }
});

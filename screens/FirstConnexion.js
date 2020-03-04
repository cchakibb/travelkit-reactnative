import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button
} from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function FirstConnexion({ setToken }) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/general/background/accueil.png")}
      style={{ width: "100%", height: "100%", opacity: "0.9" }}
    >
      <View>
        <View style={styles.logo}>
          <Image
            source={require("../assets/general/logo/logo.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
        <View
          style={{
            height: 200,
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
        <View style={styles.voyage}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.submitButtonText}> Nouveau Voyage </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    padding: 15,
    marginTop: 25
  },
  voyage: {
    height: 650,
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 500,
    width: 330,
    margin: 15,
    height: 70,
    borderRadius: 30
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#3794B5"
  }
});

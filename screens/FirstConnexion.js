import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function FirstConnexion({ setToken }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/general/background/accueil.png")}
        style={{ width: "100%", height: "100%", opacity: "0.9" }}
      >
        <View style={styles.logo}>
          <Image
            source={require("../assets/general/logo/logo.png")}
            style={{ width: 65, height: 65 }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text>Nouveau voyage</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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

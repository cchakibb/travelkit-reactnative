import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Authentication({ setToken }) {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  return (
    <View>
      <ImageBackground
        source={require("../assets/general/background/accueil.png")}
        style={{ width: "100%", height: "100%", opacity: "1" }}
      >
        <View style={styles.logo}>
          <Image
            source={require("../assets/general/logo/logo.png")}
            style={{ width: 60, height: 60 }}
          ></Image>
        </View>
        <View>
          <Text style={styles.connexion}>Connexion</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 22
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Identifiant"
            color="black"
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            color="black"
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FirstConnexion");
          }}
        >
          <View
            style={{
              marginRight: 30,
              alignItems: "flex-end"
            }}
          >
            <Ionicons name="md-checkmark-circle" size={60} color="#3794B5" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginBottom: 20,
    marginLeft: 2,
    fontSize: 18,
    backgroundColor: "white",
    color: "white",
    height: 55,
    width: 350,
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black"
  },
  logo: {
    padding: 15,
    marginTop: 25
  },
  connexion: {
    marginTop: 100,

    textAlign: "center",
    width: "100%",
    color: "white",
    fontSize: 44,
    fontWeight: "bold"
  }
});

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
        style={{ width: "100%", height: "100%", opacity: "0.9" }}
      >
        <View style={styles.logo}>
          <Image
            source={require("../assets/general/logo/logo.png")}
            style={{ width: 95, height: 95 }}
          ></Image>
        </View>
        <View
          style={{
            alignItems: "center",
            height: 630,
            justifyContent: "center"
          }}
        >
          <Text style={styles.connexion}>Connexion</Text>

          <TextInput
            style={styles.input}
            placeholder="Identifiant"
            color="black"
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            color="black"
            value={password}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FirstConnexion");
            }}
          >
            <View>
              <Ionicons name="md-checkmark-circle" size={60} color="#3794B5" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    fontSize: 18,
    backgroundColor: "white",
    color: "white",
    height: 50,
    width: 350,
    borderRadius: 3,
    borderColor: "black"
  },
  logo: {
    padding: 10,
    marginTop: 25
  },
  connexion: {
    marginBottom: 30,
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
});

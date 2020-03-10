import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";


export default function Authentication({ setToken }) {

  const navigation = useNavigation();
  const [email, setEmail] = useState("reacteur1@test.com");
  const [password, setPassword] = useState("abcde");

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
            type="text"
            placeholder="Identifiant"
            color="black"
            onChangeText={email => setEmail(email)}
            value={email}
          ></TextInput>

          <TextInput
            style={styles.input}
            type="password"
            placeholder="Mot de passe"
            secureTextEntry={true}
            color="black"
            onChangeText={password => setPassword(password)}
            value={password}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={async () => {
            try {
              const response = await axios.post(
                "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/user/login",
                {
                  email,
                  password
                }
              );
              if (response.data.token) {
                const userToken = response.data.token;

                setToken(userToken);
              } else {
                alert("Token is missing");
              }
            } catch (error) {
              alert(error.message);
            }
          }}
          /* onPress={() => {
            navigation.navigate("PickTravel");
          }} */
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

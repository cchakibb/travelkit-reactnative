import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/general/background/accueil.png")}
      style={{ width: "100%", height: "100%", opacity: "0.9" }}
    >
      <View style={styles.logo}>
        <Image
          source={require("../assets/general/logo/logo.png")}
          style={{ width: 60, height: 60 }}
        />
        <Ionicons name="bars" size={53} color="#3794B5" />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../assets/general/Icone accueil/checklist.png")}
            style={{ width: 30, height: 30, backgroundColor: "red" }}
          ></Image>
          <Text style={styles.text}>Ma checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyHealthProfile");
          }}
        >
          <Image
            source={require("../assets/general/Icone accueil/sante.png")}
            style={{ width: 30, height: 30, backgroundColor: "red" }}
          ></Image>
          <Text style={styles.text}>Mon profil santé</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Daily");
          }}
        >
          <Image
            source={require("../assets/general/Icone accueil/checklist.png")}
            style={{ width: 30, height: 30, backgroundColor: "red" }}
          ></Image>
          <Text style={styles.text}>Mon quotidien</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../assets/general/Icone accueil/checklist.png")}
            style={{ width: 30, height: 30, backgroundColor: "red" }}
          ></Image>
          <Text style={styles.text}>Mes documents</Text>
        </TouchableOpacity>
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
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 25
  }
});

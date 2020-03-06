import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function MosquitoesAndTicks() {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderTopImage title={"Moustiques et tiques"}></HeaderTopImage>
      <View>
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
          Pour ce voyage, il y a un risque de :
        </Text>
      </View>
      <View style={{ backgroundColor: "yellow" }}>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Mosquitoes");
            }}
          >
            <View>
              <Text>Moustiques</Text>
              <Image
                style={styles.icone}
                source={require("../assets/general/icone-quotidien/moustique.png")}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    borderColor: "#3794B5",
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid"
  },
  txt: {
    fontSize: 20,
    textAlign: "center",
    color: "#3794B5"
  },
  icone: {
    width: 58,
    height: 58
  }
});

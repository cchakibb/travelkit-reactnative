import React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HeaderTopImage({ title }) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/general/background/small-screen.png")}
      style={{ width: "100%", height: 225 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../assets/general/logo/logo.png")}
            style={{ width: 70, height: 70, marginTop: 43, marginLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <FontAwesome
            name="long-arrow-left"
            size={40}
            color="white"
            style={{ marginTop: 57, marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.profil}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  profil: {
    textAlign: "center",
    marginTop: 16,
    color: "#3794B5",
    fontSize: 40,
    fontWeight: "bold"
  }
});
export default HeaderTopImage;

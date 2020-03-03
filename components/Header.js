import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { HeaderBackground } from "@react-navigation/stack";

export default function Header() {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/general/background/small-screen.png")}
        style={{ width, height: 150, marginBottom: 250 }}
      ></Image>

      <Text>HEADER TITLE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});

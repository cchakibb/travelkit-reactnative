import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function Authentication({ setToken }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FirstConnexion");
        }}
      >
        <Text>USERNAME PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

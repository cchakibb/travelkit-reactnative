import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Ma checklist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyHealthProfile");
        }}
      >
        <Text>Mon profil santé</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Daily");
        }}
      >
        <Text>Mon quotidien</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Mes documents</Text>
      </TouchableOpacity>
    </View>
  );
}

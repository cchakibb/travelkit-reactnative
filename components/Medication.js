import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function Medication({ medication }) {
  const navigation = useNavigation();

  const results = [];

  if (medication.other) {
    results.push(<Text>{medication.other}, </Text>);
  }

  for (let i = 0; i < medication.relevant.length; i++) {
    if (i === medication.relevant.length - 1) {
      results.push(<Text>{medication.relevant[i]}.</Text>);
    } else {
      results.push(<Text>{medication.relevant[i]}, </Text>);
    }
  }

  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Traitements habituels :
      </Text>
      <Text style={{ fontSize: 16 }}> {results}</Text>
    </View>
  );
}

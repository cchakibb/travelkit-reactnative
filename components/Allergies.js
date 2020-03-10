import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function MedicalHistory({ allergies }) {
  const navigation = useNavigation();

  const results = [];

  if (allergies.other) {
    results.push(<Text>{allergies.other}, </Text>);
  }

  for (let i = 0; i < allergies.relevant.length; i++) {
    if (i === allergies.relevant.length - 1) {
      results.push(<Text>{allergies.relevant[i]}.</Text>);
    } else {
      results.push(<Text>{allergies.relevant[i]}, </Text>);
    }
  }

  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Allergies :</Text>
      <Text style={{ fontSize: 16 }}> {results}</Text>
    </View>
  );
}

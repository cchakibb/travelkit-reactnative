import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function ContraindicatedVaccine({ contraindicated }) {
  const results = [];

  /* if (contraindicated.name) {
    results.push(<Text>{contraindicated.name}, </Text>);
  } */

  for (let i = 0; i < contraindicated.length; i++) {
    if (i === contraindicated.length - 1) {
      results.push(<Text>{contraindicated[i].name}.</Text>);
    } else {
      results.push(<Text>{contraindicated[i].name}, </Text>);
    }
  }

  return (
    <View>
      <Text>Contre-indiqué d'après mon état de santé: {results}</Text>
    </View>
  );
}

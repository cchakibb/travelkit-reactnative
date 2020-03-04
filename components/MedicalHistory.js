import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function MedicalHistory({ medicalHistory }) {
  const navigation = useNavigation();

  const results = [];

  if (medicalHistory.other) {
    results.push(<Text>{medicalHistory.other}, </Text>);
  }

  for (let i = 0; i < medicalHistory.relevant.length; i++) {
    if (i === medicalHistory.relevant.length - 1) {
      results.push(<Text>{medicalHistory.relevant[i]}.</Text>);
    } else {
      results.push(<Text>{medicalHistory.relevant[i]}, </Text>);
    }
  }

  return (
    <View>
      <Text>Antécédents: {results}</Text>
    </View>
  );
}

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DoctorAppointment({ userToken }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is the DoctorAppointment component</Text>
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

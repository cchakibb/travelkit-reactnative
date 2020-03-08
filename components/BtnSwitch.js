import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

export default function BtnSwitch({ title }) {
  return (
    <View style={styles.btn}>
      <ToggleSwitch
        isOn={true}
        onColor="#3794B5"
        offColor="white"
        labelStyle={{ color: "black", fontWeight: "30" }}
        onToggle={isOn => console.log("changed to : ", isOn)}
      />

      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    marginLeft: 20,
    height: 40
  },
  text: {
    marginTop: 10,
    marginLeft: 27,
    fontSize: 15,
    textAlign: "center",
    alignItems: "center"
  }
});

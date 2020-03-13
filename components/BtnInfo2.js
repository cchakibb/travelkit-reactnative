import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function BtnInfo({ title }) {
  return (
    <View>
      <View style={{ height: 65 }}>
        <View style={styles.btn}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 62,
    backgroundColor: "#3794B5",
    marginHorizontal: 22,
    borderColor: "#3794B5",
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: "solid"
  },
  text: { marginTop: 7, textAlign: "center", fontSize: 20, color: "white" }
});

export default BtnInfo;

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function BtnInfo({ title }) {
  return (
    <View>
      <View style={{ height: 65 }}>
        <TouchableOpacity style={styles.btn}>
          <View>
            <Text style={styles.text}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 42,
    backgroundColor: "#3794B5",
    marginHorizontal: 22,
    borderColor: "#3794B5",
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid"
  },
  text: { marginTop: 7, textAlign: "center", fontSize: 20, color: "white" }
});

export default BtnInfo;

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Swimming() {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderTopImage title={"Baignade"}></HeaderTopImage>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      ></View>
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

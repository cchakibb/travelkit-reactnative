import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function GeneralInformation() {
  const [getMoreInfo, setGetMoreInfo] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderTopImage title={"Infos générales"}></HeaderTopImage>
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

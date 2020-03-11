import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Animals({ userToken }) {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Animaux"} page="Daily"></HeaderTopImage>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%"
          }}
        ></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

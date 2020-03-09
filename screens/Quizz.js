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
import BtnInfo from "../components/BtnInfo";

export default function Quizz({ userToken }) {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Quizz"}></HeaderTopImage>
        <View style={{ marginTop: 27 }}>
          <Text style={styles.text}>
            Quelques questions sur mon voyage afin de m'assurer de partir bien
            préparé !
          </Text>
        </View>
        <View style={{ marginTop: 27 }}>
          <BtnInfo title={"Let's go"}></BtnInfo>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  text: {
    fontSize: 16,
    height: 50,
    textAlign: "center",
    marginLeft: 33,
    marginRight: 33
  }
});

import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BtnIcone({ title, iconeBtn, page }) {
  const navigation = useNavigation();
  return (
    <View style={{ height: 85 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(page);
        }}
        style={styles.btn}
      >
        <View>
          <Image source={iconeBtn} style={styles.icone}></Image>
        </View>
        <View>
          <Text
            style={{
              marginTop: 16,
              textAlign: "center",
              fontSize: 20,
              color: "#3794B5"
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

//test

const styles = StyleSheet.create({
  icone: {
    width: 58,
    height: 58,
    marginRight: 74
  },
  btn: {
    flexDirection: "row",
    height: 59,
    marginHorizontal: 22,
    borderColor: "#3794B5",
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid"
  }
});
export default BtnIcone;

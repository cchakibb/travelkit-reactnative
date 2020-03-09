import React from "react";
import { Text, View } from "react-native";
import BtnSwitch from "../components/BtnSwitch";

export default function ChecklistTraveler({ title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Text
        style={{
          fontSize: 16,
          marginLeft: 32
        }}
      >
        {title}
      </Text>
      <View>
        <BtnSwitch></BtnSwitch>
      </View>
    </View>
  );
}

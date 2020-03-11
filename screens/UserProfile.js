import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScroolView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScrollView } from "react-native-gesture-handler";

export default function UserProfile() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text
        style={{
          color: "white"
        }}
      >
        This is the UserProfile component
      </Text>
    </View>
  );
}

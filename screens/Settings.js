import React from "react";
import { Button, Text, View } from "react-native";

export default function Settings({ userToken }) {
  return (
    <View>
      <Text>Hello Settings</Text>

      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}

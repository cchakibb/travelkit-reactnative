import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Start() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.startTxt}>GUIGUI</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Authentication");
        }}
      >
        <Image
          source={require("../assets/general/logo/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  startTxt: {
    fontSize: 35,
    fontWeight: "800",
    marginBottom: 65,
    color: "rgb(61,157,191)"
  }
});

/* import React, { Component } from "react";
import { View, Animated, Easing } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default class webviewWithLoading extends Component {
  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Authentication");
          }}
        >
          <Animated.Image
            style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
            source={require("../assets/general/logo/logo.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
} */

/* {
   <Image
          source={require("../assets/general/logo/logo.png")}
          style={{ width: 100, height: 100 }}
        /> 
} */

import React from "react";
import { Image } from "react-native";

function HeaderTopImage() {
  return (
    <Image
      style={{ width: "100%", height: "100%" }}
      source={require("../assets/general/background/small-screen.png")}
    />
  );
}
export default HeaderTopImage;

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  FlatList,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import moment from "moment";
require("moment/locale/fr");
import { useNavigation } from "@react-navigation/core";
/* import { FlatList } from "react-native-gesture-handler"; */

export default function PickTravel({ userToken }) {
  const navigation = useNavigation();
  const [travel, setTravel] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchTravels = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travels",
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );
      setTravel(response.data);

      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchTravels();
  }, []);

  return (
    <View>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <ImageBackground
          source={require("../assets/general/background/accueil.png")}
          style={{ width: "100%", height: "100%", opacity: "1" }}
        >
          <View style={styles.logo}>
            <Image
              source={require("../assets/general/logo/logo.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <View
            style={{
              height: 165,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 60
              }}
            >
              Travel kit
            </Text>
          </View>
          <View
            style={{
              height: 30
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 20
              }}
            >
              Voyages prévus :
            </Text>
          </View>
          <View
            style={{
              height: 500,
              alignItems: "center"
            }}
          >
            <FlatList
              data={travel.travels}
              keyExtractor={item => {
                return item._id;
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 350,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "grey",
                    backgroundColor: "white",
                    padding: 20,
                    alignItems: "center",
                    marginTop: 35
                  }}
                  onPress={() => {
                    navigation.navigate("Home", {
                      travelDestination: item.destination,
                      travelDeparture: item.dates.departure,
                      travelReturn: item.dates.return,
                      travelId: item._id
                    });
                  }}
                >
                  <Text
                    style={{
                      color: "#3794B5",
                      fontSize: 16
                    }}
                  >
                    {item.destination} - Du{" "}
                    {moment(item.dates.departure).format("L")} au{" "}
                    {moment(item.dates.return).format("L")}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    padding: 15,
    marginTop: 25
  }
});

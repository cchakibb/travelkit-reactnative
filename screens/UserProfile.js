import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import moment from "moment";
require("moment/locale/fr");
import { FontAwesome } from "@expo/vector-icons";

export default function UserProfile({ userToken }) {
  const [travel, setTravel] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

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
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={styles.logoProfil}>
            <Image
              source={require("../assets/general/logo/logo.png")}
              style={{ width: 60, height: 60 }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <FontAwesome name="bars" size={55} color="#3794B5" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 350,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../assets/general/logo/adult-attractive-beautiful-beauty-415829.jpg")}
              style={styles.photoProfil}
            />
            <View style={{ flexDirection: "row", marginTop: 23 }}>
              <Text style={{ fontSize: 20, color: "white" }}>Anna</Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                {" "}
                Martin
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MyTravelerProfile");
              }}
            >
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: "white" }}>
                  Mon profil voyageur
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Mes voyages prévus :{" "}
            </Text>
          </View>
          <View
            style={{
              height: 330,
              alignItems: "center",
              marginTop: 5
            }}
          >
            <FlatList
              data={travel.travels}
              keyExtractor={item => {
                return item.destination;
              }}
              renderItem={({ item }) => (
                <Text style={{ color: "white", fontSize: 18, padding: 5 }}>
                  {item.destination}
                </Text>
              )}
            />
          </View>

          <View style={{ height: 70, backgroundColor: "black" }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "right",
                marginRight: 25
              }}
            >
              Mentions légales
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logoProfil: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 40
  },
  photoProfil: {
    width: 180,
    height: 180,
    borderRadius: 100
  }
});

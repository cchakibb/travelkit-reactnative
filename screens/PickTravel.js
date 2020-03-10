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
      console.log(response.data);
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
          <View>
            <View style={styles.logo}>
              <Image
                source={require("../assets/general/logo/logo.png")}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                height: 200,
                justifyContent: "flex-end",
                alignItems: "center"
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
              <FlatList
                data={travel.travels}
                keyExtractor={item => {
                  return item._id;
                }}
                renderItem={({ item }) => <Text>{item.destination}</Text>}
              />
            </View>

            <View style={styles.travel}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                  navigation.navigate("Destination");
                }}
              >
                <Text style={styles.submitButtonText}> Nouveau Voyage </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    padding: 15,
    marginTop: 25
  },
  travel: {
    height: 650,
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 500,
    width: 330,
    margin: 15,
    height: 70,
    borderRadius: 30,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "grey"
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#3794B5"
  }
});

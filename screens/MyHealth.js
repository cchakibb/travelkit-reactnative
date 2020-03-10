import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import Allergies from "../components/Allergies";
import MedicalHistory from "../components/MedicalHistory";
import Medication from "../components/Medication";
import HeaderTopImage from "../components/HeaderTopImage";

export default function MyHealth({ userToken }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/health/healthstatus",
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );

      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      alert("MyHealth: something went wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <HeaderTopImage title={"Ma santé"}></HeaderTopImage>
      <View>
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View>
              <Text
                style={{
                  color: "#3794B5",
                  fontSize: 20,

                  height: 50,
                  textAlign: "center",
                  marginTop: 10
                }}
              >
                Ma santé
              </Text>
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Age :</Text>
                <Text style={{ fontSize: 16 }}>{data.age} ans</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Poids :
                </Text>
                <Text> {data.weight} kg</Text>
              </View>
            </View>
            <MedicalHistory medicalHistory={data.medicalHistory} />
            <Allergies allergies={data.allergies} />
            <Medication medication={data.medication} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";
import MedicalHistory from "../components/MedicalHistory";
import Allergies from "../components/Allergies";
import Medication from "../components/Medication";
import HeaderTopImage from "../components/HeaderTopImage";
import { ScrollView } from "react-native-gesture-handler";

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
      <View>
        <HeaderTopImage title={"Ma santé"}></HeaderTopImage>
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View
              style={{
                height: 55,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.textTitle}>Ma santé</Text>
            </View>
            <View
              style={{
                height: 250,
                width: 440,
                marginTop: 20,
                marginLeft: 12
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Age :</Text>
                <Text style={{ fontSize: 16 }}> {data.age} ans</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginTop: 3 }}
                >
                  Poids :
                </Text>
                <Text style={{ fontSize: 16 }}> {data.weight} kg</Text>
              </View>

              <MedicalHistory medicalHistory={data.medicalHistory} />

              <Allergies allergies={data.allergies} />
              <Medication medication={data.medication} />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  textTitle: {
    color: "#3794B5",
    fontSize: 20
  }
});

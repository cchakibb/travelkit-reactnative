import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MedicalHistory from "../components/MedicalHistory";
import Allergies from "../components/Allergies";
import Medication from "../components/Medication";

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
    <View style={styles.container}>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{ color: "blue", fontSize: 40 }}>Ma santé</Text>
          <Text>Age: {data.age} ans</Text>
          <Text>Poids: {data.weight} kg</Text>

          <MedicalHistory medicalHistory={data.medicalHistory} />
          <Allergies allergies={data.allergies} />
          <Medication medication={data.medication} />
          <Text>POSOLOGIE ??? (introuvable dans json)</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="pencil-circle"
              size={32}
              color={"#3D9DBF"}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

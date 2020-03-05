import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
import axios from "axios";
import ViewPager from "@react-native-community/viewpager";
import moment from "moment";
import ContraindicatedVaccine from "../components/ContraindicatedVaccine";
require("moment/locale/fr");

export default function MyVaccinationCard() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/health/vaccinationrecord",
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTVkMmEwZGNkMmVlZTAwMDljYWRmZDEiLCJpYXQiOjE1ODM0MDc5ODMsImV4cCI6MTU4MzQ5NDM4M30.y8-x59y_td_dapsUd6JUEld_VYdl_xogZ7hXdvsYX7o"
          }
        }
      );
      setData(response.data);
      /* console.log(response.data); */
      setIsLoading(false);
    } catch (error) {
      alert("MyVaccinationCard: Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <View>
          <ViewPager style={styles.viewPager} initialPage={0}>
            <View style={styles.page} key="1">
              <Text>Mes vaccins à jour:</Text>
              {data.vaccinationRecord.previous_vaccines[0].name &&
              data.vaccinationRecord.previous_vaccines[0].date ? (
                <View>
                  <Text>
                    {data.vaccinationRecord.previous_vaccines[0].name}
                  </Text>
                  <Text>
                    {moment(
                      data.vaccinationRecord.previous_vaccines[0].date
                    ).format("LL")}
                  </Text>
                </View>
              ) : (
                <Text>Aucun</Text>
              )}
            </View>
            <View style={styles.page} key="2">
              <Text>Mes vaccins obligatoires:</Text>
              {data.vaccinationRecord.mandatory[0].name ? (
                <Text>{data.vaccinationRecord.mandatory[0].name}</Text>
              ) : (
                <Text>Aucun</Text>
              )}
            </View>
            <View style={styles.page} key="3">
              <Text>Mes vaccins recommandés:</Text>
              {data.vaccinationRecord.recommended[0].name ? (
                <Text>{data.vaccinationRecord.recommended[0].name}</Text>
              ) : (
                <Text>Aucun</Text>
              )}
            </View>
          </ViewPager>
          <ContraindicatedVaccine
            contraindicated={data.vaccinationRecord.contraindicated}
          />

          {/* {data.vaccinationRecord.contraindicated[0].name ? (
            <Text>{data.vaccinationRecord.contraindicated[0].name}</Text>
          ) : (
            <Text>Aucun</Text>
          )} */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    marginLeft: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "blue",
    width: 300,
    height: 300
  },
  page: {
    justifyContent: "center",
    alignItems: "center"
  }
});

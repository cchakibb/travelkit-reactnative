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
import HeaderTopImage from "../components/HeaderTopImage";
import ViewPager from "@react-native-community/viewpager";
import moment from "moment";
import ContraindicatedVaccine from "../components/ContraindicatedVaccine";
import { ScrollView } from "react-native-gesture-handler";
require("moment/locale/fr");

export default function MyVaccinationCard({ userToken }) {
  const [userVaccineData, setUserVaccineData] = useState();
  const [recommendedvaccines, setRecommendedvaccines] = useState(null);
  const [mandatoryOrRecommended, setMandatoryOrRecommended] = useState(null);
  const [contraindicated, setContraindicated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchVaccineData = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/health/vaccinationrecord",
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );
      setUserVaccineData(response.data);

      setIsLoading(false);
    } catch (error) {
      alert("MyVaccinationCard: Something went wrong");
    }
  };

  const fetchRecommendedVaccinesInfo = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev//health/vaccinationrecord/info/recommendedvaccines",
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );
      setRecommendedvaccines(response.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const fetchMandatoryOrRecommended = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev//health/vaccinationrecord/info/mandatoryorrecommended",
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );
      setMandatoryOrRecommended(response.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const fetchVaccineContraindicated = async () => {
    try {
      const response = await axios.get(
        "https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/health/vaccinationrecord/info/contraindications",
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );
      setContraindicated(response.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchVaccineData();
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <HeaderTopImage title={"Carnet de vaccination"}></HeaderTopImage>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <ViewPager style={styles.viewPager} initialPage={0}>
            <View style={{ alignItems: "center" }} key="1">
              <Text style={styles.page}>Mes vaccins à jour:</Text>
              {userVaccineData.vaccinationRecord.previous_vaccines[0].name &&
              userVaccineData.vaccinationRecord.previous_vaccines[0].date ? (
                <View>
                  <Text>
                    {
                      userVaccineData.vaccinationRecord.previous_vaccines[0]
                        .name
                    }
                  </Text>
                  <Text>
                    {moment(
                      userVaccineData.vaccinationRecord.previous_vaccines[0]
                        .date
                    ).format("LL")}
                  </Text>
                </View>
              ) : (
                <Text>Aucun</Text>
              )}
            </View>
            <View style={{ alignItems: "center" }} key="2">
              <Text style={styles.page}>Mes vaccins obligatoires:</Text>
              {userVaccineData.vaccinationRecord.mandatory[0].name ? (
                <Text>
                  {userVaccineData.vaccinationRecord.mandatory[0].name}
                </Text>
              ) : (
                <Text>Aucun</Text>
              )}
            </View>
            <View style={{ alignItems: "center" }} key="3">
              <Text style={styles.page}>Mes vaccins recommandés:</Text>
              {userVaccineData.vaccinationRecord.recommended[0].name ? (
                <Text>
                  {userVaccineData.vaccinationRecord.recommended[0].name}
                </Text>
              ) : (
                <Text>Aucun</Text>
              )}
            </View>
          </ViewPager>
          <ContraindicatedVaccine
            contraindicated={userVaccineData.vaccinationRecord.contraindicated}
          />
          <TouchableOpacity onPress={() => fetchRecommendedVaccinesInfo()}>
            <Text style={{ color: "blue" }}>
              Informations sur les vaccins recommandés
            </Text>
          </TouchableOpacity>
          {recommendedvaccines !== null ? (
            <FlatList
              data={recommendedvaccines.subsections}
              keyExtractor={item => {
                return String(item.index);
              }}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
          ) : null}
          <TouchableOpacity onPress={() => fetchMandatoryOrRecommended()}>
            <Text style={{ color: "blue" }}>
              Vaccination obligatoire ou recommandée : quelle différence ?
            </Text>
          </TouchableOpacity>
          {mandatoryOrRecommended !== null ? (
            <FlatList
              data={mandatoryOrRecommended.subsections}
              keyExtractor={item => {
                return String(item.index);
              }}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
          ) : null}
          <TouchableOpacity onPress={() => fetchVaccineContraindicated()}>
            <Text style={{ color: "blue" }}>
              Contre-indications aux vaccins
            </Text>
          </TouchableOpacity>
          {contraindicated !== null ? (
            <FlatList
              data={contraindicated.subsections}
              keyExtractor={item => {
                return String(item.index);
              }}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
          ) : null}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    marginLeft: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#3794B5",
    width: 300,
    height: 300,
    borderRadius: 25
  },
  page: {
    color: "#3794B5",
    fontSize: 20,
    marginTop: 5
  }
});

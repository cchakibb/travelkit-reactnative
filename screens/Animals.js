import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import axios from "axios";

export default function Animals({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();

  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const id = route.params.travelId;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/animals`,
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );
      setGetInfo(response.data);
      setIsloading(false);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderTopImage title={"Animaux"} page="Daily" />
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text>{getInfo.introduction}</Text>
            <Text>{getInfo.subsections}</Text>
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

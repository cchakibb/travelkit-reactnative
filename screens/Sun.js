import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  Text,
  FlatList
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";
import axios from "axios";

export default function Sun({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const id = route.params.travelId;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/sun`,
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
        <HeaderTopImage title={"Soleil"}></HeaderTopImage>
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text>{getInfo.introduction.introduction}</Text>
            <FlatList
              data={getInfo.introduction.bullet_points}
              keyExtractor={item => {
                return item.index;
              }}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
            <BtnInfo
              onPress={() => <Text>Hello</Text>}
              title={"Quels sont les risques ? "}
            ></BtnInfo>
            <BtnInfo title={"Comment bien se protéger ?"}></BtnInfo>
            <BtnInfo title={"Comment choisir sa crème scolaire ?"}></BtnInfo>
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

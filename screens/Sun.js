import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";
import axios from "axios";

export default function Sun({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
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

  /* const showDetails = () => {
    return ()
  } */

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

            <TouchableOpacity onPress={() => setShowInfo1(!showInfo1)}>
              <BtnInfo title={"Quels sont les risques ?"} />
            </TouchableOpacity>
            {showInfo1 ? (
              <FlatList
                data={getInfo.sections[0].subsections}
                keyExtractor={item => {
                  return item.index;
                }}
                renderItem={({ item }) => <Text>{item}</Text>}
              />
            ) : null}
            <TouchableOpacity onPress={() => setShowInfo2(!showInfo2)}>
              <BtnInfo title={"Comment bien se protéger ?"} />
            </TouchableOpacity>
            {showInfo2 ? (
              <FlatList
                data={getInfo.sections[1].subsections}
                keyExtractor={item => {
                  return item.index;
                }}
                renderItem={({ item }) => <Text>{item}</Text>}
              />
            ) : null}
            <TouchableOpacity onPress={() => setShowInfo3(!showInfo3)}>
              <BtnInfo title={"Comment choisir sa crème solaire ?"} />
            </TouchableOpacity>
            {showInfo3 ? (
              <FlatList
                data={getInfo.sections[2].subsections}
                keyExtractor={item => {
                  return item.index;
                }}
                renderItem={({ item }) => <Text>{item}</Text>}
              />
            ) : null}
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

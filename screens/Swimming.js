import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";
import axios from "axios";

export default function Swimming({ userToken, route }) {
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
        `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/swim`,
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
        <HeaderTopImage title={"Baignade"}></HeaderTopImage>
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text>{getInfo.introduction}</Text>
            <TouchableOpacity onPress={() => setShowInfo1(!showInfo1)}>
              <BtnInfo title={getInfo.sections[0].title} />
            </TouchableOpacity>
            {showInfo1 ? <Text>{getInfo.sections[0].subsections}</Text> : null}
            <TouchableOpacity onPress={() => setShowInfo2(!showInfo2)}>
              <BtnInfo title={getInfo.sections[1].title} />
            </TouchableOpacity>
            {showInfo2 ? <Text>{getInfo.sections[1].subsections}</Text> : null}
            <TouchableOpacity onPress={() => setShowInfo3(!showInfo3)}>
              <BtnInfo title={getInfo.sections[2].title} />
            </TouchableOpacity>
            {showInfo3 ? <Text>{getInfo.sections[2].subsections}</Text> : null}
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
  text: {
    fontSize: 16,
    height: 80,
    marginTop: 17,
    marginLeft: 25,
    marginRight: 45,
    marginBottom: 13,
    lineHeight: 23
  }
});

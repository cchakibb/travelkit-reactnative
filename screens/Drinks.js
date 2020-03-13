import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image
} from "react-native";
import axios from "axios";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Drinks({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();
  const [showInfo, setShowInfo] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const { params } = useRoute();

  const id = route.params.passParams;

  console.log("Drinks = ", route.params);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/drinks`,
        {
          headers: {
            Authorization: "Bearer " + userToken
          }
        }
      );

      setShowInfo(response.data.sections);
      setGetInfo(response.data);

      setIsloading(false);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  /*   const displayText = item => {
    const copy = [...showInfo];
    for (let i = 0; i < showInfo.length; i++) {
      if (showInfo[i].title === item.title) {
        showInfo[i].visible = !showInfo[i].visible;
      }
    }
    setShowInfo(copy);
  }; */

  return (
    <ScrollView style={styles.container}>
      <HeaderTopImage title={"Boisson"} page="EatAndDrink"></HeaderTopImage>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <View style={{ padding: 5, marginLeft: 10, marginRight: 10 }}>
          <FlatList
            data={getInfo.introduction}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontSize: 16, marginBottom: 15 }}>{item}</Text>
              </View>
            )}
          />
          {getInfo.subsections.comment ? (
            <Text style={{ fontSize: 16, marginBottom: 15 }}>
              {getInfo.subsections.comment}
            </Text>
          ) : null}
          <FlatList
            data={getInfo.subsections.risks}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontSize: 16, marginBottom: 15 }}>{item}</Text>
              </View>
            )}
          />

          {getInfo.subsections.bullet_points_list.introduction ? (
            <Text style={{ fontSize: 16, marginBottom: 15 }}>
              {getInfo.subsections.bullet_points_list.introduction}
            </Text>
          ) : null}

          <FlatList
            data={getInfo.subsections.bullet_points_list.bullet_points}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontSize: 16, marginBottom: 15 }}>{item}</Text>
              </View>
            )}
          />
          <FlatList
            data={getInfo.subsections.subsections}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontSize: 16, marginBottom: 15 }}>{item}</Text>
              </View>
            )}
          />
        </View>
      )}
      <View style={{ alignItems: "center", height: 450, width: 400 }}>
        <Image
          source={require("../assets/quotidien/boire-et-manger/boire/boisson.jpg")}
          style={{ width: "80%", height: "40%", borderRadius: 15 }}
        ></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

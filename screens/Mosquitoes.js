import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";
import axios from "axios";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import BtnInfo2 from "../components/BtnInfo2";
import HeaderTopImage from "../components/HeaderTopImage";

export default function Mosquitoes({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();
  const [showInfo, setShowInfo] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const { params } = useRoute();
  console.log("Mosquitoes =", route.params.passParams);
  const id = route.params.passParams;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/mosquitos`,
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

  const displayText = item => {
    const copy = [...showInfo];
    for (let i = 0; i < showInfo.length; i++) {
      if (showInfo[i].title === item.title) {
        showInfo[i].visible = !showInfo[i].visible;
      }
    }
    setShowInfo(copy);
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderTopImage
        title={"Moustiques"}
        page="MosquitoesAndTicks"
      ></HeaderTopImage>
      <View>
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <FlatList
              data={getInfo.introduction}
              keyExtractor={item => {
                return String(item.index);
              }}
              renderItem={({ item }) => (
                <Text style={{ padding: 5, marginLeft: 10, fontSize: 16 }}>
                  {item.subsections}
                </Text>
              )}
            />
            <FlatList
              data={getInfo.introduction}
              keyExtractor={item => {
                return String(item.index);
              }}
              renderItem={({ item }) => (
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                  {item.introduction}
                </Text>
              )}
            />
            <FlatList
              style={{
                padding: 5,
                marginLeft: 10,
                marginRight: 10
              }}
              data={getInfo.introduction}
              keyExtractor={item => {
                return String(item.index);
              }}
              renderItem={({ item }) => (
                <Text style={{ fontSize: 16, marginBottom: 15 }}>
                  {item.bullet_points}
                </Text>
              )}
            />
            {getInfo.sections[0].title ? (
              <FlatList
                style={{ marginLeft: 10, marginRight: 10 }}
                data={showInfo}
                keyExtractor={item => {
                  return String(item.title);
                }}
                renderItem={({ item }) => (
                  <View style={{ marginTop: 4 }}>
                    <TouchableOpacity
                      onPress={() => {
                        displayText(item);
                      }}
                    >
                      <BtnInfo2 title={item.title} />
                    </TouchableOpacity>
                    {item.visible === true && (
                      <Text style={{ fontSize: 16, marginBottom: 15 }}>
                        {item.subsections}
                      </Text>
                    )}
                  </View>
                )}
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

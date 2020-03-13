import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import BtnInfo from "../components/BtnInfo";

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
    <View style={styles.container}>
      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={getInfo.introduction}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => <Text>{item.subsections}</Text>}
          />
          <FlatList
            data={getInfo.introduction}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => <Text>{item.introduction}</Text>}
          />
          <FlatList
            data={getInfo.introduction}
            keyExtractor={item => {
              return String(item.index);
            }}
            renderItem={({ item }) => <Text>{item.bullet_points}</Text>}
          />
          {getInfo.sections[0].title ? (
            <FlatList
              style={{ padding: 5, marginLeft: 10, marginRight: 10 }}
              data={showInfo}
              keyExtractor={item => {
                return String(item.title);
              }}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      displayText(item);
                    }}
                  >
                    <BtnInfo title={item.title} />
                  </TouchableOpacity>
                  {item.visible === true && <Text>{item.subsections}</Text>}
                </View>
              )}
            />
          ) : null}
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

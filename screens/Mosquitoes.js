import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

export default function Mosquitoes({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();
  const [showInfo, setShowInfo] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const { params } = useRoute();

  const id = route.params.travelId;

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
            renderItem={({ item }) => <Text>{item}</Text>}
          />
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

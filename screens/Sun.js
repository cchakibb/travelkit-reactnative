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
  const [showInfo, setShowInfo] = useState([]);
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
      <View>
        <HeaderTopImage title={"Soleil"} page="Daily"></HeaderTopImage>
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
            <View>
              {getInfo.sections[0].title ? (
                <FlatList
                  data={showInfo}
                  keyExtractor={item => {
                    return item.title;
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

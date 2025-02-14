import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  Image
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import HeaderTopImage from "../components/HeaderTopImage";
import BtnInfo from "../components/BtnInfo";
import { HitTestResultTypes } from "expo/build/AR";
import axios from "axios";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function GeneralInformation({ userToken, route }) {
  const [getInfo, setGetInfo] = useState();
  const [showInfo, setShowInfo] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const { params } = useRoute();

  const id = route.params.travelId;
  // route.params.travelId

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://c0d1syq1s6.execute-api.eu-central-1.amazonaws.com/dev/travel/${id}/advice/generalinfo`,
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
        <HeaderTopImage title={"Infos générales"} page="Daily" />
        {isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View style={{ height: 170 }}>
              {getInfo.destinationInfo ? (
                <FlatList
                  style={{ padding: 5, marginLeft: 10 }}
                  data={getInfo.destinationInfo}
                  keyExtractor={item => {
                    return String(item.index);
                  }}
                  renderItem={({ item }) => (
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                  )}
                />
              ) : null}
            </View>
            <View
              style={{
                height: 85,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../assets/quotidien/Infos-generales/typea.png")}
                style={{
                  width: 65,
                  height: 65
                }}
              ></Image>
              <Image
                source={require("../assets/quotidien/Infos-generales/typeb.png")}
                style={{
                  width: 65,
                  height: 65
                }}
              ></Image>
              <Image
                source={require("../assets/quotidien/Infos-generales/typec.png")}
                style={{
                  width: 65,
                  height: 65
                }}
              ></Image>
            </View>

            <View>
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

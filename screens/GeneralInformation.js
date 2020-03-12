import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Text
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
  /*   const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
  const [showInfo5, setShowInfo5] = useState(false); */
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();
  const { params } = useRoute();
  /* console.log("Params GENERALINFORMATION ", route); */
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
            <View>
              {getInfo.destinationInfo ? (
                <FlatList
                  data={getInfo.destinationInfo}
                  keyExtractor={item => {
                    return String(item.index);
                  }}
                  renderItem={({ item }) => <Text>{item}</Text>}
                />
              ) : null}
            </View>
            <View>
              {getInfo.sections[0].title ? (
                <FlatList
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

            {/* <TouchableOpacity onPress={() => setShowInfo1(!showInfo1)}>
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
            <TouchableOpacity onPress={() => setShowInfo4(!showInfo4)}>
              <BtnInfo title={getInfo.sections[3].title} />
            </TouchableOpacity>
            {showInfo4 ? <Text>{getInfo.sections[3].subsections}</Text> : null}
            <TouchableOpacity onPress={() => setShowInfo4(!showInfo4)}>
              <BtnInfo title={getInfo.sections[3].title} />
            </TouchableOpacity>
            {showInfo4 ? <Text>{getInfo.sections[3].subsections}</Text> : null}
            <TouchableOpacity onPress={() => setShowInfo5(!showInfo5)}>
              <BtnInfo title={getInfo.sections[4].title} />
            </TouchableOpacity>
            {showInfo5 ? <Text>{getInfo.sections[4].subsections}</Text> : null} */}
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

import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";

import Settings from "./screens/Settings";
import Start from "./screens/Start";
import Authentication from "./screens/Authentication";
import FirstConnexion from "./screens/FirstConnexion";
import MyHealthProfile from "./screens/MyHealthProfile";
import Daily from "./screens/Daily";
import MyHealth from "./screens/MyHealth";
import MyVaccinationCard from "./screens/MyVaccinationCard";
import GeneralInformation from "./screens/GeneralInformation";
import EatAndDrink from "./screens/EatAndDrink";
import Food from "./screens/Food";
import Drinks from "./screens/Drinks";
import MosquitoesAndTicks from "./screens/MosquitoesAndTicks";
import Mosquitoes from "./screens/Mosquitoes";
import Ticks from "./screens/Ticks";
import Sun from "./screens/Sun";
import Swimming from "./screens/Swimming";
import Animals from "./screens/Animals";
import Quizz from "./screens/Quizz";
// MyHealthInformation TABS
import Medicine from "./screens/Medicine";
import FirstAidKit from "./screens/FirstAidKit";
import DoctorAppointment from "./screens/DoctorAppointment";
import HealthInsurance from "./screens/HealthInsurance";
// MyHealthInformation TABS

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async token => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setIsLoading(false);
      setUserToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          options={{ header: () => null, animationEnabled: false }}
        >
          {() => <Start />}
        </Stack.Screen>
        <Stack.Screen
          name="Authentication"
          options={{ header: () => null, animationEnabled: false }}
        >
          {() => <Authentication setToken={setToken} />}
        </Stack.Screen>
        <Stack.Screen
          name="FirstConnexion"
          options={{
            header: () => null,
            animationEnabled: false,
            title: ""
          }}
        >
          {() => <FirstConnexion setToken={setToken} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{ header: () => null, animationEnabled: false }}
        >
          {() => <Home setToken={setToken} />}
        </Stack.Screen>
        <Stack.Screen
          name="MyHealthProfile"
          options={{
            headerShown: false
          }}
        >
          {() => <MyHealthProfile setToken={setToken} />}
        </Stack.Screen>
        <Stack.Screen name="MyHealth" options={{ title: "" }}>
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="MyHealth">{() => <MyHealth />}</Tab.Screen>
              <Tab.Screen name="MyVaccinationCard">
                {() => <MyVaccinationCard />}
              </Tab.Screen>
              <Tab.Screen name="Medicine">{() => <Medicine />}</Tab.Screen>
              <Tab.Screen name="FirstAidKit">
                {() => <FirstAidKit />}
              </Tab.Screen>
              <Tab.Screen name="DoctorAppointment">
                {() => <DoctorAppointment />}
              </Tab.Screen>
              <Tab.Screen name="HealthInsurance">
                {() => <HealthInsurance />}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="MyVaccinationCard" options={{ title: "" }}>
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="MyVaccinationCard">
                {() => <MyVaccinationCard />}
              </Tab.Screen>
              <Tab.Screen name="MyHealth">{() => <MyHealth />}</Tab.Screen>
              <Tab.Screen name="Medicine">{() => <Medicine />}</Tab.Screen>
              <Tab.Screen name="FirstAidKit">
                {() => <FirstAidKit />}
              </Tab.Screen>
              <Tab.Screen name="DoctorAppointment">
                {() => <DoctorAppointment />}
              </Tab.Screen>
              <Tab.Screen name="HealthInsurance">
                {() => <HealthInsurance />}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Daily" options={{ headerShown: false, title: "" }}>
          {() => <Daily setToken={setToken} />}
        </Stack.Screen>
        <Stack.Screen
          name="GeneralInformation"
          options={{ headerShown: false, title: "" }}
        >
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="EatAndDrink"
          options={{ headerShown: false, title: "" }}
        >
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="MosquitoesAndTicks"
          options={{ headerShown: false, title: "" }}
        >
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>

              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Sun" options={{ headerShown: false, title: "" }}>
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Swimming"
          options={{ headerShown: false, title: "" }}
        >
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>

              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Animals"
          options={{ headerShown: false, title: "" }}
        >
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Quizz" options={{ headerShown: false, title: "" }}>
          {() => (
            <Tab.Navigator
              // ici on peut gérer le design de notre bottomTabBar
              tabBarOptions={{
                activeTintColor: "violet",
                inactiveTintColor: "gray",
                inactiveBackgroundColor: "yellow",
                activeBackgroundColor: "green",
                style: {
                  backgroundColor: "black",
                  height: 100
                }
              }}
            >
              <Tab.Screen name="Quizz">{() => <Quizz />}</Tab.Screen>
              <Tab.Screen name="Animals">{() => <Animals />}</Tab.Screen>
              <Tab.Screen name="Swimming">{() => <Swimming />}</Tab.Screen>
              <Tab.Screen name="Sun">{() => <Sun />}</Tab.Screen>
              <Tab.Screen name="GeneralInformation">
                {() => <GeneralInformation />}
              </Tab.Screen>
              <Tab.Screen name="MosquitoesAndTicks">
                {() => <MosquitoesAndTicks />}
              </Tab.Screen>
              <Tab.Screen name="EatAndDrink">
                {() => <EatAndDrink />}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

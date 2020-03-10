import React, { useState, useEffect } from "react";
import { AsyncStorage, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";

import Settings from "./screens/Settings";
import Start from "./screens/Start";
import Authentication from "./screens/Authentication";
import PickTravel from "./screens/PickTravel";
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
import Checklist from "./screens/Checklist";

// MyHealthInformation TABS
import Medicine from "./screens/Medicine";
import FirstAidKit from "./screens/FirstAidKit";
import DoctorAppointment from "./screens/DoctorAppointment";
import HealthInsurance from "./screens/HealthInsurance";
import UserProfile from "./screens/UserProfile";
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
      setUserToken(null); // TODO replace null by userToken
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? null : userToken === null ? (
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
            {() => <Authentication userToken={userToken} setToken={setToken} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Start"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <Start userToken={userToken} />}
          </Stack.Screen> */}
          <Stack.Screen
            name="PickTravel"
            options={{
              header: () => null,
              animationEnabled: false,
              title: ""
            }}
          >
            {() => <PickTravel userToken={userToken} />}
          </Stack.Screen>

          <Stack.Screen
            name="Home"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <Home userToken={userToken} />}
          </Stack.Screen>
          <Stack.Screen
            name="UserProfile"
            options={{
              header: () => null,
              animationEnabled: false,
              title: ""
            }}
          >
            {() => <UserProfile userToken={userToken} />}
          </Stack.Screen>
          <Stack.Screen
            name="Checklist"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <Checklist userToken={userToken} />}
          </Stack.Screen>

          <Stack.Screen
            name="MyHealthProfile"
            options={{
              headerShown: false
            }}
          >
            {() => <MyHealthProfile userToken={userToken} />}
          </Stack.Screen>
          <Stack.Screen
            userToken={userToken}
            name="MyHealth"
            options={{ title: "" }}
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
                <Tab.Screen name="MyHealth">
                  {() => <MyHealth userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MyVaccinationCard">
                  {() => <MyVaccinationCard userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Medicine">
                  {() => <Medicine userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="FirstAidKit">
                  {() => <FirstAidKit userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="DoctorAppointment">
                  {() => <DoctorAppointment userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="HealthInsurance">
                  {() => <HealthInsurance userToken={userToken} />}
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
                  {() => <MyVaccinationCard userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MyHealth">
                  {() => <MyHealth userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Medicine">
                  {() => <Medicine userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="FirstAidKit">
                  {() => <FirstAidKit userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="DoctorAppointment">
                  {() => <DoctorAppointment userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="HealthInsurance">
                  {() => <HealthInsurance userToken={userToken} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Daily"
            options={{ headerShown: false, title: "" }}
          >
            {() => <Daily userToken={userToken} />}
          </Stack.Screen>
          <Stack.Screen
            name="GeneralInformation"
            options={{ headerShown: false, title: "" }}
          >
            {() => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  inactiveTintColor: "gray",
                  style: {
                    backgroundColor: "white",
                    height: 100
                  }
                }}
              >
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="EatAndDrink">
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MosquitoesAndTicks">
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
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
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MosquitoesAndTicks">
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
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
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="EatAndDrink">
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>

                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
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
                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MosquitoesAndTicks">
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="EatAndDrink">
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
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
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MosquitoesAndTicks">
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="EatAndDrink">
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>

                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
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
                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MosquitoesAndTicks">
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="EatAndDrink">
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Quizz"
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
                <Tab.Screen name="Quizz">
                  {() => <Quizz userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Animals">
                  {() => <Animals userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Swimming">
                  {() => <Swimming userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="Sun">
                  {() => <Sun userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="GeneralInformation">
                  {() => <GeneralInformation userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="MosquitoesAndTicks">
                  {() => <MosquitoesAndTicks userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen name="EatAndDrink">
                  {() => <EatAndDrink userToken={userToken} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

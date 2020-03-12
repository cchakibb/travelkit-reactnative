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
import MyTravelerProfile from "./screens/MyTravelerProfile";

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
            name="MyTravelerProfile"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => (
              <MyTravelerProfile userToken={userToken} setToken={setToken} />
            )}
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
            options={{
              headerShown: false
            }}
          >
            {() => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  inactiveTintColor: "gray",
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="MyHealth"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/etat_de_sante.png")}
                      />
                    )
                  }}
                >
                  {() => <MyHealth userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="MyVaccinationCard"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/vaccin.png")}
                      />
                    )
                  }}
                >
                  {() => <MyVaccinationCard userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="Medicine"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/medicament.png")}
                      />
                    )
                  }}
                >
                  {() => <Medicine userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="FirstAidKit"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/trousse_de_secours.png")}
                      />
                    )
                  }}
                >
                  {() => <FirstAidKit userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="DoctorAppointment"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/consultation.png")}
                      />
                    )
                  }}
                >
                  {() => <DoctorAppointment userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="HealthInsurance"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/couverture_sante.png")}
                      />
                    )
                  }}
                >
                  {() => <HealthInsurance userToken={userToken} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="MyVaccinationCard"
            options={{
              headerShown: false
            }}
          >
            {() => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  inactiveTintColor: "gray",
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="MyVaccinationCard"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/vaccin.png")}
                      />
                    )
                  }}
                >
                  {() => <MyVaccinationCard userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="MyHealth"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/etat_de_sante.png")}
                      />
                    )
                  }}
                >
                  {() => <MyHealth userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="Medicine"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/medicament.png")}
                      />
                    )
                  }}
                >
                  {() => <Medicine userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="FirstAidKit"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/trousse_de_secours.png")}
                      />
                    )
                  }}
                >
                  {() => <FirstAidKit userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="DoctorAppointment"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/consultation.png")}
                      />
                    )
                  }}
                >
                  {() => <DoctorAppointment userToken={userToken} />}
                </Tab.Screen>
                <Tab.Screen
                  name="HealthInsurance"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-sante/couverture_sante.png")}
                      />
                    )
                  }}
                >
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
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  inactiveTintColor: "gray",
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="GeneralInfo"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="EatAndDrink"
            options={{ headerShown: false, title: "" }}
          >
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabGeneralInformation"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="MosquitoesAndTicks"
            options={{ headerShown: false, title: "" }}
          >
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabGeneralInformation"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>

                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="Sun" options={{ headerShown: false, title: "" }}>
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabGeneralInformation"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Swimming"
            options={{ headerShown: false, title: "" }}
          >
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabGeneralInformation"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>

                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Animals"
            options={{ headerShown: false, title: "" }}
          >
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>

                <Tab.Screen
                  name="TabGeneralInformation"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Quizz"
            options={{ headerShown: false, title: "" }}
          >
            {props => (
              <Tab.Navigator
                // ici on peut gérer le design de notre bottomTabBar
                tabBarOptions={{
                  style: {
                    height: 100
                  },
                  showLabel: false
                }}
              >
                <Tab.Screen
                  name="TabQuizz"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/quizz.png")}
                      />
                    )
                  }}
                >
                  {() => <Quizz userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabGeneralInformation"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/infos.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <GeneralInformation userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabEatAndDrink"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/repas.png")}
                      />
                    )
                  }}
                >
                  {() => <EatAndDrink userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabMosquitoesAndTicks"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/moustique.png")}
                      />
                    )
                  }}
                >
                  {() => (
                    <MosquitoesAndTicks userToken={userToken} {...props} />
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSun"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/soleil.png")}
                      />
                    )
                  }}
                >
                  {() => <Sun userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabSwimming"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/baignade.png")}
                      />
                    )
                  }}
                >
                  {() => <Swimming userToken={userToken} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                  name="TabAnimals"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./assets/general/icone-quotidien/animaux.png")}
                      />
                    )
                  }}
                >
                  {() => <Animals userToken={userToken} {...props} />}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

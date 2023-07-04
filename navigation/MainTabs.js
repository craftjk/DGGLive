import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

import ScorecardScreen from "../screens/ScorecardScreen";
import LiveScreen from "../screens/LiveScreen";
import RulesScreen from "../screens/RulesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const textMap = {
  Scorecard: {
    English: "Scorecard",
    Español: "Scorecard",
  },
  Live: {
    English: "Live",
    Español: "En Vivo",
  },
  Rules: {
    English: "Rules",
    Español: "Reglas",
  },
  Settings: {
    English: "Settings",
    Español: "Ajustes",
  },
};

function MainTabs() {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const activeLanguage = useSelector((state) => state.settings.activeLanguage);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: isDarkMode
            ? Colors.grayscale[1]
            : Colors.grayscale[8],
        },
        headerTitle: ({ children }) => {
          return (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: moderateScale(21),
                color: isDarkMode ? Colors.white : Colors.black,
              }}
            >
              {children === "Rules" && activeLanguage === "English" // kc_todo refactor this
                ? "Official Rules"
                : textMap[children][activeLanguage]}
            </Text>
          );
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Scorecard") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name === "Live") {
            iconName = focused ? "trophy" : "trophy-outline";
          } else if (route.name === "Rules") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary.main,
        tabBarInactiveTintColor: Colors.grayscale[3],
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: isDarkMode
              ? Colors.grayscale[1]
              : Colors.grayscale[8],
          },
          null,
        ],
        tabBarLabel: ({ focused, color }) => {
          let label;

          switch (route.name) {
            case "Scorecard":
              label = textMap["Scorecard"][activeLanguage].toUpperCase();
              break;
            case "Live":
              label = textMap["Live"][activeLanguage].toUpperCase();
              break;
            case "Rules":
              label = textMap["Rules"][activeLanguage].toUpperCase();
              break;
            case "Settings":
              label = textMap["Settings"][activeLanguage].toUpperCase();
              break;
            default:
              break;
          }

          return (
            <Text
              style={{
                color,
                fontSize: moderateScale(10),
                marginTop: moderateScale(-3),
              }}
            >
              {label}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Scorecard" component={ScorecardScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
      <Tab.Screen name="Rules" component={RulesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;

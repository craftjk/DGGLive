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

function MainTabs() {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: isDarkMode
            ? Colors.grayscale[1]
            : Colors.grayscale[8],
        },
        headerTintColor: isDarkMode ? Colors.white : Colors.black,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: moderateScale(21),
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
              label = "SCORECARD";
              break;
            case "Live":
              label = "LIVE";
              break;
            case "Rules":
              label = "RULES";
              break;
            case "Settings":
              label = "SETTINGS";
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

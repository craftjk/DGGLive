import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import ScorecardScreen from "../screens/ScorecardScreen";
import LiveScreen from "../screens/LiveScreen";
import RulesScreen from "../screens/RulesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
            <Text style={{ color, fontSize: 10, marginTop: -3 }}>{label}</Text>
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

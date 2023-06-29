import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ScorecardScreen from "../screens/ScorecardScreen";
import LiveScreen from "../screens/LiveScreen";
import RulesScreen from "../screens/RulesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary.main,
        tabBarInactiveTintColor: Colors.grayscale[3],
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Scorecard" component={ScorecardScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
      <Tab.Screen name="Rules" component={RulesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;

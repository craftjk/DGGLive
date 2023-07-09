import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

import LiveScreen from "../screens/Live/LiveScreen";
import Colors from "../constants/Colors";
import EventDetailsScreen from "../screens/Live/EventDetailsScreen";

const Stack = createStackNavigator();

function LiveNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Live Events" component={LiveScreen} />
      <Stack.Screen name="Event Details" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
}

export default LiveNavigator;

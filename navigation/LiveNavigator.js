import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import LiveScreen from "../screens/Live/LiveScreen";
import Colors from "../constants/Colors";
import EventDetailsScreen from "../screens/Live/EventDetailsScreen";

const Stack = createStackNavigator();

function LiveNavigator() {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const activeLanguage = useSelector((state) => state.settings.activeLanguage);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Live Events"
        component={LiveScreen}
        options={{
          header: () => {
            let title =
              activeLanguage === "English" ? "Live Events" : "Eventos en Vivo";

            return (
              <View
                style={{
                  ...styles.header,
                  backgroundColor: isDarkMode
                    ? Colors.grayscale[1]
                    : Colors.grayscale[8],
                }}
              >
                <Text
                  style={{
                    ...styles.headerText,
                    color: isDarkMode ? Colors.white : Colors.black,
                  }}
                >
                  {title}
                </Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="Event Details"
        component={EventDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: moderateScale(85),
    justifyContent: "flex-end",
    borderBottomColor: "lightgray",
    borderBottomWidth: moderateScale(0.2),
  },
  headerText: {
    fontWeight: "bold",
    fontSize: moderateScale(21),
    paddingLeft: moderateScale(15),
    paddingBottom: moderateScale(10),
  },
});

export default LiveNavigator;

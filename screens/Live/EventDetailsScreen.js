import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

import fetchEventResults from "../../sampleData/fetchEventResults";
import fetchEventTopPlayers from "../../sampleData/fetchEventTopPlayers";
import fetchPlayerGannonBuhr from "../../sampleData/fetchPlayerGannonBuhr";
import fetchPlayerAliSmith from "../../sampleData/fetchPlayerAliSmith";
import Colors from "../../constants/Colors";
import EventLeadersList from "./EventLeadersList";

const eventData = fetchEventResults.data;

const EventDetails = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  const [activeDivisionTab, setActiveDivisionTab] = useState("LEADERS");
  const [activeRound, setActiveRound] = useState(3);

  let ListComponent = EventLeadersList;

  return (
    <SafeAreaView>
      <View style={styles.eventNameHeaderContainer}>
        <View style={styles.eventTierLabelContainer}>
          <Text style={styles.eventTierLabelText}>
            {eventData.FormattedLongTier.toUpperCase()}
          </Text>
        </View>
        <View style={styles.eventNameContainer}>
          <Text style={styles.eventNameText}>{eventData.Name}</Text>
        </View>
        <View style={styles.eventMetadataContainer}>
          <Ionicons
            name="calendar-outline"
            size={moderateScale(13)}
            color={Colors.primary.main}
          />
          <Text
            style={{
              ...styles.eventMetadataText,
              color: isDarkMode ? Colors.white : Colors.grayscale[3],
            }}
          >
            {eventData.DateRange}
          </Text>
          <Ionicons
            name="location-outline"
            size={moderateScale(13)}
            color={Colors.primary.main}
          />
          <Text
            style={{
              ...styles.eventMetadataText,
              color: isDarkMode ? Colors.white : Colors.grayscale[3],
            }}
          >
            {eventData.LocationShort}
          </Text>
        </View>
      </View>
      <View style={styles.divisionNavTabContainer}>
        <Pressable
          onPress={() => {
            setActiveDivisionTab("LEADERS");
          }}
          style={{
            ...styles.divisionNavTab,
            backgroundColor:
              activeDivisionTab === "LEADERS" ? Colors.grayscale[7] : null,
            borderBottomWidth: activeDivisionTab === "LEADERS" ? 2 : 1,
            borderBottomColor:
              activeDivisionTab === "LEADERS"
                ? Colors.black
                : Colors.grayscale[5],
          }}
          key={"leadersNavTab"}
        >
          <Text
            style={{
              ...styles.divisionNavTabText,
              color: isDarkMode ? Colors.white : Colors.black,
              fontWeight: activeDivisionTab === "LEADERS" ? "bold" : "normal",
            }}
          >
            LEADERS
          </Text>
        </Pressable>
        {eventData.Divisions.map((d) => {
          return (
            <Pressable
              onPress={() => {
                setActiveDivisionTab(d.Division);
              }}
              style={{
                ...styles.divisionNavTab,
                backgroundColor:
                  activeDivisionTab === d.Division ? Colors.grayscale[7] : null,
                borderBottomWidth: activeDivisionTab === d.Division ? 2 : 1,
                borderBottomColor:
                  activeDivisionTab === d.Division
                    ? Colors.black
                    : Colors.grayscale[5],
              }}
              key={`${d.Division}NavTab`}
            >
              <Text
                style={{
                  ...styles.divisionNavTabText,
                  color: isDarkMode ? Colors.white : Colors.black,
                  fontWeight:
                    activeDivisionTab === d.Division ? "bold" : "normal",
                }}
              >
                {d.Division}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.roundNavTabContainer}>
        {Object.values(eventData.RoundsList).map((r) => {
          return (
            <Pressable
              onPress={() => {
                setActiveRound(r.Number);
              }}
              style={{
                ...styles.roundNavTab,
                backgroundColor:
                  activeRound === r.Number ? Colors.grayscale[9] : null,
              }}
              key={`${r.Number}RoundNumber`}
            >
              <Text
                style={{
                  ...styles.roundNavTabText,
                  color: isDarkMode ? Colors.white : Colors.black,
                }}
              >
                {`RD ${r.Number}`}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <ListComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  eventNameHeaderContainer: {
    alignItems: "center",
    marginTop: moderateScale(10),
    marginBottom: moderateScale(30),
  },
  eventTierLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary.main,
    transform: "skewX(15deg)",
    marginVertical: moderateScale(5),
  },
  eventTierLabelText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(2),
    transform: "skewX(-15deg)",
  },
  eventNameContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(2),
    marginBottom: moderateScale(10),
  },
  eventNameText: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
  eventMetadataContainer: {
    flexDirection: "row",
  },
  eventMetadataText: {
    fontSize: moderateScale(13),
    marginRight: moderateScale(10),
    marginLeft: moderateScale(3),
  },
  divisionNavTabContainer: {
    flexDirection: "row",
    height: moderateScale(38),
    marginHorizontal: moderateScale(12),
  },
  divisionNavTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divisionNavTabText: {
    fontSize: moderateScale(10),
  },
  roundNavTabContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: moderateScale(15),
    flexDirection: "row",
    backgroundColor: Colors.grayscale[6],
    alignSelf: "center",
    borderRadius: moderateScale(7),
  },
  roundNavTab: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(7),
    margin: moderateScale(3),
  },
  roundNavTabText: {
    fontSize: moderateScale(11),
  },
});

export default EventDetails;

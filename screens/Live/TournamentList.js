import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

import tourneys from "../../sampleData/tourneys";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import recentEvents from "../../sampleData/recentEvents";

function renderTourneyListItem(isDarkMode, navigation, tourney) {
  return (
    <TouchableOpacity
      key={tourney.TournID}
      onPress={() => {
        console.log("navigation", navigation);
        navigation.navigate("Event Details");
      }}
    >
      <View
        style={{
          ...styles.libraryCard,
          backgroundColor: isDarkMode
            ? Colors.grayscale[1]
            : Colors.grayscale[8],
        }}
      >
        <View style={styles.cardContents}>
          <Text
            style={{
              fontSize: moderateScale(17),
              color: isDarkMode ? Colors.white : Colors.black,
            }}
            numberOfLines={5}
          >
            {tourney.Name}
          </Text>
          <View style={styles.cardFooterContainer}>
            <Ionicons
              name={"calendar-outline"}
              size={moderateScale(11)}
              color={Colors.primary.main}
              style={{ marginRight: moderateScale(4) }}
            />
            <Text
              style={{
                ...styles.footerText,
                color: isDarkMode ? Colors.grayscale[6] : Colors.grayscale[4],
              }}
            >
              {tourney.DateRange}
            </Text>
            <Ionicons
              name={"location-outline"}
              size={moderateScale(11)}
              color={Colors.primary.main}
              style={{
                marginRight: moderateScale(1),
                marginLeft: moderateScale(8),
              }}
            />
            <Text
              style={{
                ...styles.footerText,
                color: isDarkMode ? Colors.grayscale[6] : Colors.grayscale[4],
              }}
            >
              {tourney.ShortLocation}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const TournamentList = ({
  isDarkMode,
  activeLanguage,
  eventData,
  navigation,
}) => {
  const tourneys = eventData;

  return (
    <ScrollView
      style={styles.container}
      // kc_todo sticky header isn't working
      // StickyHeaderComponent={() => {
      //   return (
      //     <View style={{ width: 200, height: 200, backgroundColor: "red" }}>
      //       <Text
      //         style={{
      //           ...styles.listSectionLabel,
      //           color: isDarkMode ? "white" : "black",
      //         }}
      //       >
      //         Major
      //       </Text>
      //     </View>
      //   );
      // }}
    >
      <View>
        <Text
          style={{
            ...styles.listSectionLabel,
            color: isDarkMode ? "white" : "black",
          }}
        >
          Major
        </Text>
        {tourneys
          .filter((t) => t.Tier === "Major")
          .map((ft) => {
            return renderTourneyListItem(isDarkMode, navigation, ft);
          })}
      </View>
      <View>
        <Text
          style={{
            ...styles.listSectionLabel,
            color: isDarkMode ? "white" : "black",
          }}
        >
          A-Tier
        </Text>
        {tourneys
          .filter((t) => t.Tier === "A")
          .map((ft) => {
            return renderTourneyListItem(isDarkMode, navigation, ft);
          })}
      </View>
      <View>
        <Text
          style={{
            ...styles.listSectionLabel,
            color: isDarkMode ? "white" : "black",
          }}
        >
          B-Tier
        </Text>
        {tourneys
          .filter((t) => t.Tier === "B")
          .map((ft) => {
            return renderTourneyListItem(isDarkMode, navigation, ft);
          })}
      </View>
      <View>
        <Text
          style={{
            ...styles.listSectionLabel,
            color: isDarkMode ? "white" : "black",
          }}
        >
          C-Tier
        </Text>
        {tourneys
          .filter((t) => t.Tier === "C")
          .map((ft) => {
            return renderTourneyListItem(isDarkMode, navigation, ft);
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  libraryCard: {
    flex: 1,
    marginVertical: 3,
    width: "100%",
    backgroundColor: Colors.grayscale[8],
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContents: {
    width: "100%",
    padding: moderateScale(10),
  },
  listSectionLabel: {
    padding: moderateScale(10),
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  cardFooterContainer: {
    flexDirection: "row",
    padding: moderateScale(3),
  },
  footerText: {
    fontSize: moderateScale(11),
  },
});

export default TournamentList;

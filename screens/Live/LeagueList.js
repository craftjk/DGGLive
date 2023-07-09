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

import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function renderLeagueListItem(isDarkMode, league) {
  return (
    <TouchableOpacity key={league.TournID} onPress={() => {}}>
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
            {league.Name}
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
              {league.DateRange}
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
              {league.ShortLocation}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const TournamentList = ({ isDarkMode, activeLanguage, eventData }) => {
  const leagues = eventData;

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
          Today
        </Text>
        {leagues
          .filter((l) => l.StartDate !== "2023-06-13")
          .map((fl) => {
            return renderLeagueListItem(isDarkMode, fl);
          })}
      </View>
      <View>
        <Text
          style={{
            ...styles.listSectionLabel,
            color: isDarkMode ? "white" : "black",
          }}
        >
          Active
        </Text>
        {leagues
          .filter((l) => l.StartDate !== "2023-06-13")
          .map((fl) => {
            return renderLeagueListItem(isDarkMode, fl);
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

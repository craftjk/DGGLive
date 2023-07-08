import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  expandedSectionContainer: {
    paddingHorizontal: moderateScale(5),
    paddingRight: moderateScale(20),
    paddingBottom: moderateScale(15),

    borderBottomWidth: 1,
    borderBottomColor: Colors.grayscale[5],
    marginHorizontal: moderateScale(10),
  },
  indentedSectionContainer: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.grayscale[5],
  },
  indentedTextContainer: {
    flexDirection: "row",
    paddingLeft: moderateScale(15),
  },
  dblIndentedTextContainer: {
    flexDirection: "row",
    paddingLeft: moderateScale(40),
  },
  subheaderContainer: {
    padding: moderateScale(10),
  },
  subheaderText: {
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  alphaBullet: {
    fontSize: moderateScale(12),
    marginRight: moderateScale(5),
  },
  plainText: {
    fontSize: moderateScale(12),
    marginBottom: moderateScale(10),
  },
  spacer: {
    height: moderateScale(15),
  },
});

const expandedIntroduction = ({ isDarkMode, activeLanguage }) => (
  <View style={styles.expandedSectionContainer}>
    <Text
      style={{
        ...styles.plainText,
        color: isDarkMode ? Colors.white : Colors.black,
      }}
    >
      The PDGA Competition Manual for Disc Golf Events outlines procedures and
      guidelines for PDGA events and is to be used in conjunction with the
      Official Rules of Disc Golf and the Tour Standards document. These
      procedures and guidelines are required for all PDGA-sanctioned events
      unless specified otherwise. This includes limited exceptions for events in
      countries outside the United States and Canada which are noted in the
      International Program Guide. All references in the Competition Manual or
      Tour Standards to a "Tournament Director" or "TD" mean the person in
      charge of the event under{" "}
      <Text
        onPress={() => {}}
        style={{
          ...styles.plainText,
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        801.02.G.
      </Text>{" "}
      If a Tournament Director finds any provision in any of these documents
      unacceptable, they may request a waiver by contacting the PDGA Director of
      Event Support at{" "}
      <Text
        style={{
          ...styles.plainText,
          fontWeight: "bold",
          color: Colors.primary.main,
          textDecorationLine: "underline",
        }}
      >
        eventsupport@pdga.com
      </Text>{" "}
      or by calling{" "}
      <Text
        style={{
          ...styles.plainText,
          fontWeight: "bold",
          color: Colors.primary.main,
          textDecorationLine: "underline",
        }}
      >
        762-253-2200
      </Text>
      .
    </Text>
  </View>
);

const expandedSpiritOfTheGame = ({ isDarkMode, activeLanguage }) => (
  <View style={styles.expandedSectionContainer}>
    <Text
      style={{
        ...styles.plainText,
        color: isDarkMode ? Colors.white : Colors.black,
      }}
    >
      Disc golf is typically played without the supervision of a referee or
      umpire. The game relies on the player to show sportsmanship, integrity,
      consideration for other players, and to abide by the Official Rules of
      Disc Golf. All players should conduct themselves in a disciplined manner,
      demonstrating courtesy and sportsmanship at all times, irrespective of how
      competitive they may be.
    </Text>
    <Text
      style={{
        ...styles.plainText,
        fontWeight: "bold",
        fontStyle: "italic",
        color: isDarkMode ? Colors.white : Colors.black,
      }}
    >
      Make the call. Accept the call. It’s not personal; it’s the rules. That is
      the spirit of the game of disc golf.
    </Text>
  </View>
);

const expandedDiscGolfersCode = ({ isDarkMode, activeLanguage }) => (
  <View
    style={{
      ...styles.expandedSectionContainer,
      ...styles.indentedSectionContainer,
    }}
  >
    <View style={styles.subheaderContainer}>
      <Text
        style={{
          ...styles.subheaderText,
          color: isDarkMode ? Colors.white : Colors.black,
        }}
      >
        Play Smart
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text
        style={{
          ...styles.plainText,
          color: isDarkMode ? Colors.white : Colors.black,
        }}
      >
        NEVER throw into a blind area or when players, spectators, pedestrians
        or other facility users are within range. Use a spotter.
      </Text>
    </View>
    <View style={styles.subheaderContainer}>
      <Text
        style={{
          ...styles.subheaderText,
          color: isDarkMode ? Colors.white : Colors.black,
        }}
      >
        Respect the Course
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text
        style={{
          ...styles.plainText,
          color: isDarkMode ? Colors.white : Colors.black,
        }}
      >
        Observe all posted rules. No littering, graffiti, or abuse of equipment
        or flora.
      </Text>
    </View>
    <View style={styles.subheaderContainer}>
      <Text
        style={{
          ...styles.subheaderText,
          color: isDarkMode ? Colors.white : Colors.black,
        }}
      >
        Represent the Sport
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text
        style={{
          ...styles.plainText,
          color: isDarkMode ? Colors.white : Colors.black,
        }}
      >
        Be positive and responsible. Teach others.
      </Text>
    </View>
  </View>
);

export default {
  Introduction: expandedIntroduction,
  "Spirit of the Game": expandedSpiritOfTheGame,
  "Disc Golfer's Code": expandedDiscGolfersCode,
  "Dev note: Sections 1-3 not shown": () => {},
};

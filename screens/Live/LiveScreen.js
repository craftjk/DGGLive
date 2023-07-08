import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { moderateScale } from "react-native-size-matters";

import Colors from "../../constants/Colors";
import Tournaments from "./Tournaments";
import Leagues from "./Leagues";

const LiveScreen = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const activeLanguage = useSelector((state) => state.settings.activeLanguage);

  const [activeNavTab, setActiveNavTab] = useState("TOURNAMENTS");

  // TODOS
  // Handle languages

  let MainCmp = Tournaments;

  if (activeNavTab === "LEAGUES") {
    MainCmp = Leagues;
  }

  return (
    <SafeAreaView
      style={{
        ...styles.screen,
        backgroundColor: isDarkMode ? Colors.grayscale[1] : Colors.grayscale[8],
      }}
    >
      <View
        style={{
          ...styles.navContainer,
          backgroundColor: isDarkMode ? Colors.black : Colors.grayscale[7],
        }}
      >
        <View style={styles.navTab}>
          <TouchableOpacity
            onPress={() => {
              setActiveNavTab("TOURNAMENTS");
            }}
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor: isDarkMode
                ? activeNavTab === "TOURNAMENTS"
                  ? Colors.grayscale[1]
                  : Colors.black
                : activeNavTab === "TOURNAMENTS"
                ? Colors.grayscale[8]
                : Colors.grayscale[7],
            }}
          >
            <Text
              style={{
                ...styles.rulesNavText,
                color: isDarkMode ? Colors.white : Colors.black,
              }}
            >
              {activeLanguage === "English" ? "TOURNAMENTS" : "TORNEOS"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navTab}>
          <TouchableOpacity
            onPress={() => {
              setActiveNavTab("LEAGUES");
            }}
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor: isDarkMode
                ? activeNavTab === "LEAGUES"
                  ? Colors.grayscale[1]
                  : Colors.black
                : activeNavTab === "LEAGUES"
                ? Colors.grayscale[8]
                : Colors.grayscale[7],
            }}
          >
            <Text
              style={{
                ...styles.rulesNavText,
                color: isDarkMode ? Colors.white : Colors.black,
              }}
            >
              {activeLanguage === "English" ? "LEAGUES" : "LIGAS"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <MainCmp activeLanguage={activeLanguage} isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  navContainer: {
    height: moderateScale(30),
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(5),
    borderRadius: moderateScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navTabSelectWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "80%",
    borderRadius: moderateScale(5),
  },
  rulesNavText: {
    fontSize: moderateScale(11),
  },
});

export default LiveScreen;

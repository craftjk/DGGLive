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
import OfficialRules from "./OfficialRules";
import QnA from "./QnA";
import CompetitionManual from "./CompetitionManual";

const RulesScreen = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const activeLanguage = useSelector((state) => state.settings.activeLanguage);

  const [activeNavTab, setActiveNavTab] = useState("RULES");

  // TODOS
  // Handle languages

  let MainCmp = OfficialRules;

  if (activeNavTab === "COMPETITION MANUAL") {
    MainCmp = CompetitionManual;
  } else if (activeNavTab === "Q&A") {
    MainCmp = QnA;
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
          ...styles.rulesNavContainer,
          backgroundColor: isDarkMode ? Colors.black : Colors.grayscale[7],
        }}
      >
        <View style={styles.rulesNavTab}>
          <TouchableOpacity
            onPress={() => {
              setActiveNavTab("RULES");
            }}
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor: isDarkMode
                ? activeNavTab === "RULES"
                  ? Colors.grayscale[1]
                  : Colors.black
                : activeNavTab === "RULES"
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
              RULES
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.rulesNavTab, flex: 3 }}>
          <TouchableOpacity
            onPress={() => {
              setActiveNavTab("COMPETITION MANUAL");
            }}
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor: isDarkMode
                ? activeNavTab === "COMPETITION MANUAL"
                  ? Colors.grayscale[1]
                  : Colors.black
                : activeNavTab === "COMPETITION MANUAL"
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
              COMPETITION MANUAL
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rulesNavTab}>
          <TouchableOpacity
            onPress={() => {
              setActiveNavTab("Q&A");
            }}
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor: isDarkMode
                ? activeNavTab === "Q&A"
                  ? Colors.grayscale[1]
                  : Colors.black
                : activeNavTab === "Q&A"
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
              Q&A
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
  rulesNavContainer: {
    height: moderateScale(30),
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(5),
    borderRadius: moderateScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rulesNavTab: {
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

export default RulesScreen;

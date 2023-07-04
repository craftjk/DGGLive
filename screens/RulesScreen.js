import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { moderateScale } from "react-native-size-matters";
import Colors from "../constants/Colors";

const RulesScreen = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const activeLanguage = useSelector((state) => state.settings.activeLanguage);

  const [activeNavTab, setActiveNavTab] = useState("RULES");

  // TODOS
  // Add a touchable around the nav tab to change state
  // Handle dark mode styling
  // Handle languages

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
          <View
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor:
                activeNavTab === "RULES"
                  ? Colors.grayscale[8]
                  : Colors.grayscale[7],
            }}
          >
            <Text style={styles.rulesNavText}>RULES</Text>
          </View>
        </View>
        <View style={{ ...styles.rulesNavTab, flex: 3 }}>
          <View
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor:
                activeNavTab === "COMPETITION MANUAL"
                  ? Colors.grayscale[8]
                  : Colors.grayscale[7],
            }}
          >
            <Text style={styles.rulesNavText}>COMPETITION MANUAL</Text>
          </View>
        </View>
        <View style={styles.rulesNavTab}>
          <View
            style={{
              ...styles.navTabSelectWrapper,
              backgroundColor:
                activeNavTab === "Q&A"
                  ? Colors.grayscale[8]
                  : Colors.grayscale[7],
            }}
          >
            <Text style={styles.rulesNavText}>Q&A</Text>
          </View>
        </View>
      </View>
      <Text>Rules Screen</Text>
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
    fontSize: moderateScale(10),
  },
});

export default RulesScreen;

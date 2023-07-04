import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import Colors from "../constants/Colors";
import {
  SET_ACTIVE_LANGUAGE,
  SET_IS_DARK_MODE,
} from "../store/actions/settings";
import { switchStyle } from "../constants/Styles";

const iconSize = moderateScale(22);

const textMap = {
  Language: {
    English: "Language",
    Español: "Idioma",
  },
  "Dark Mode": {
    English: "Dark Mode",
    Español: "Modo Oscuro",
  },
  Feedback: {
    English: "Feedback",
    Español: "Feedback",
  },
};

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const activeLanguage = useSelector((state) => state.settings.activeLanguage);

  return (
    <SafeAreaView
      style={{
        ...styles.screen,
        backgroundColor: isDarkMode ? Colors.grayscale[1] : Colors.grayscale[8],
      }}
    >
      <View style={styles.rows}>
        <View style={styles.row}>
          <View style={styles.rowIconContainer}>
            <Ionicons
              name={"globe"}
              size={iconSize}
              color={isDarkMode ? Colors.grayscale[5] : Colors.grayscale[3]}
            />
          </View>
          <Text
            style={{
              ...styles.rowLabelText,
              color: isDarkMode ? Colors.white : Colors.black,
            }}
          >
            {textMap["Language"][activeLanguage]}
          </Text>
          <View style={styles.spacer} />
          <View style={styles.rowRightElementContainer}>
            <Menu>
              <MenuTrigger
                text={activeLanguage || "English"}
                customStyles={{
                  triggerText: {
                    ...styles.languageText,
                    color: isDarkMode ? Colors.white : Colors.black,
                  },
                }}
              />
              <MenuOptions
                optionsContainerStyle={{ borderRadius: moderateScale(20) }}
              >
                <MenuOption
                  style={{
                    ...styles.menuOption,
                    backgroundColor: isDarkMode
                      ? Colors.grayscale[1]
                      : Colors.grayscale[8],
                  }}
                  onSelect={() => {
                    dispatch({
                      type: SET_ACTIVE_LANGUAGE,
                      language: "English",
                    });
                  }}
                >
                  {activeLanguage === "English" ? (
                    <Ionicons
                      name={"md-checkmark"}
                      size={moderateScale(18)}
                      style={{ position: "absolute", left: 3 }}
                      color={
                        isDarkMode ? Colors.grayscale[5] : Colors.grayscale[3]
                      }
                    />
                  ) : null}

                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: isDarkMode ? Colors.white : Colors.black,
                      marginLeft: moderateScale(16),
                    }}
                  >
                    English
                  </Text>
                </MenuOption>
                <MenuOption
                  style={{
                    ...styles.menuOption,
                    backgroundColor: isDarkMode
                      ? Colors.grayscale[1]
                      : Colors.grayscale[8],
                    borderBottomWidth: 0,
                  }}
                  onSelect={() => {
                    dispatch({
                      type: SET_ACTIVE_LANGUAGE,
                      language: "Español",
                    });
                  }}
                >
                  {activeLanguage === "Español" ? (
                    <Ionicons
                      name={"md-checkmark"}
                      size={moderateScale(22)}
                      style={{ position: "absolute", left: 3 }}
                      color={
                        isDarkMode ? Colors.grayscale[5] : Colors.grayscale[3]
                      }
                    />
                  ) : null}
                  <Text
                    style={{
                      fontSize: moderateScale(18),
                      color: isDarkMode ? Colors.white : Colors.black,
                      marginLeft: moderateScale(16),
                    }}
                  >
                    Español
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowIconContainer}>
            <Ionicons
              name={"moon"}
              size={iconSize}
              color={isDarkMode ? Colors.grayscale[5] : Colors.grayscale[3]}
            />
          </View>
          <View style={styles.rowLabelContainer}>
            <Text
              style={{
                ...styles.rowLabelText,
                color: isDarkMode ? Colors.white : Colors.black,
              }}
            >
              {textMap["Dark Mode"][activeLanguage]}
            </Text>
          </View>
          <View style={styles.spacer} />
          <View style={styles.rowRightElementContainer}>
            <Switch
              trackColor={
                switchStyle.trackColor[isDarkMode ? "darkMode" : "lightMode"]
              }
              thumbColor={
                isDarkMode
                  ? switchStyle.thumbColor.darkMode
                  : switchStyle.thumbColor.lightMode
              }
              onValueChange={() => {
                dispatch({
                  type: SET_IS_DARK_MODE,
                  isDarkMode: !isDarkMode,
                });
              }}
              value={isDarkMode}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowIconContainer}>
            <Ionicons
              name={"chatbox"}
              size={iconSize}
              color={isDarkMode ? Colors.grayscale[5] : Colors.grayscale[3]}
            />
          </View>
          <Text
            style={{
              ...styles.rowLabelText,
              color: isDarkMode ? Colors.white : Colors.black,
            }}
          >
            {textMap["Feedback"][activeLanguage]}
          </Text>
        </View>
        <View style={styles.spacer}></View>
        <View style={styles.versionAndCopyrightContainer}>
          <Text
            style={{
              ...styles.copyrightText,
              color: isDarkMode ? Colors.white : Colors.black,
            }}
          >
            {activeLanguage === "English"
              ? "Portfolio project by Kyle Craft"
              : "Proyecto de cartera por Kyle Craft"}
          </Text>
          <Text
            style={{
              ...styles.versionText,
              color: isDarkMode ? Colors.grayscale[6] : Colors.black,
            }}
          >
            {activeLanguage === "English" ? "Version" : "Versión"} 0.1.0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rows: {
    flex: 1,
    paddingTop: moderateScale(10),
  },
  row: {
    height: moderateScale(60),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowIconContainer: {
    padding: moderateScale(12),
    paddingLeft: moderateScale(15),
  },
  rowLabelContainer: {
    flex: 1,
  },
  rowLabelText: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  spacer: { flex: 1 },
  rowRightElementContainer: {
    padding: moderateScale(10),
    paddingRight: moderateScale(15),
  },
  versionAndCopyrightContainer: {
    width: "100%",
    height: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  copyrightText: {
    fontSize: moderateScale(11),
    fontWeight: "bold",
  },
  versionText: {
    fontSize: moderateScale(10),
    marginTop: moderateScale(3),
  },
  languageText: {
    fontSize: moderateScale(16),
    marginTop: moderateScale(3),
  },
  menuOption: {
    padding: moderateScale(10),
    borderBottomColor: Colors.grayscale[3],
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SettingsScreen;

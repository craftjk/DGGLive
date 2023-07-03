import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import Colors from "../constants/Colors";

const iconSize = moderateScale(22);

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.rows}>
        <View style={styles.row}>
          <View style={styles.rowIconContainer}>
            <Ionicons
              name={"globe"}
              size={iconSize}
              color={Colors.grayscale[3]}
            />
          </View>
          <Text style={styles.rowLabelText}>Language</Text>
          <View style={styles.spacer} />
          <View style={styles.rowRightElementContainer}>
            <Text>English</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowIconContainer}>
            <Ionicons
              name={"moon"}
              size={iconSize}
              color={Colors.grayscale[3]}
            />
          </View>
          <View style={styles.rowLabelContainer}>
            <Text style={styles.rowLabelText}>Dark Mode</Text>
          </View>
          <View style={styles.spacer} />
          <View style={styles.rowRightElementContainer}>
            <Switch></Switch>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowIconContainer}>
            <Ionicons
              name={"chatbox"}
              size={iconSize}
              color={Colors.grayscale[3]}
            />
          </View>
          <Text style={styles.rowLabelText}>Feedback</Text>
        </View>
        <View style={styles.spacer}></View>
        <View style={styles.versionAndCopyrightContainer}>
          <Text style={styles.copyrightText}>
            Portfolio project by Kyle Craft
          </Text>
          <Text style={styles.versionText}>Version 0.1.0</Text>
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
});

export default SettingsScreen;

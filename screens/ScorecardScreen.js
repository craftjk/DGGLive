import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ScorecardScreen = () => (
  <SafeAreaView style={styles.screen}>
    <Text style={styles.headerText}>DGG</Text>
    <Text style={styles.subheaderText}>Digital Scorecard</Text>
    <Text style={styles.subsubheaderText}>
      a portfolio project by Kyle Craft
    </Text>

    <View>
      <View style={{ flexDirection: "row", marginBottom: moderateScale(4) }}>
        <Text>Access Code</Text>
        <Ionicons name="help-circle-outline" size={15} color="black" />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          editable={false}
          multiline
          numberOfLines={1}
          maxLength={40}
          onChangeText={(text) => text}
          value={""}
          style={{ padding: 10 }}
        />
      </View>
    </View>
    <View style={styles.continueButtonWrapper}>
      <Text style={{ fontSize: 12 }}>CONTINUE</Text>
      <Ionicons name="chevron-forward-outline" size={15} color="black" />
    </View>

    <Ionicons
      name="help-circle-outline"
      size={22}
      color="black"
      style={{
        position: "absolute",
        top: moderateScale(50),
        right: moderateScale(6),
      }}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: moderateScale(40),
  },
  subheaderText: {
    fontWeight: "bold",
    fontSize: moderateScale(20),
  },
  subsubheaderText: {
    fontSize: moderateScale(12),
    marginBottom: moderateScale(40),
  },
  inputWrapper: {
    backgroundColor: Colors.grayscale[9],
    borderColor: Colors.primary.main,
    borderWidth: 1,
    width: moderateScale(250),
  },
  continueButtonWrapper: {
    backgroundColor: Colors.grayscale[7],
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: moderateScale(15),
    height: moderateScale(40),
    width: moderateScale(250),
    marginBottom: moderateScale(180),
  },
});

export default ScorecardScreen;

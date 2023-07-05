import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

import pdgaOfficialRules from "./pdgaOfficialRules";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const OfficialRules = ({ isDarkMode, activeLanguage }) => {
  const [expandedSections, setExpandedSections] = useState({});

  return (
    <ScrollView>
      {Object.entries(pdgaOfficialRules).map(([sectionHeader, sectionBody]) => {
        const isExpanded = expandedSections[sectionHeader];
        return (
          <View>
            <TouchableOpacity
              style={{
                ...styles.headerRowContainer,
                borderBottomWidth: isExpanded ? 0 : 1,
              }}
              onPress={() => {
                setExpandedSections({
                  ...expandedSections,
                  [sectionHeader]: !expandedSections[sectionHeader],
                });
              }}
            >
              <Text style={styles.headerText}>{sectionHeader}</Text>
              <Ionicons
                size={moderateScale(25)}
                color={Colors.grayscale[2]}
                name={
                  expandedSections[sectionHeader]
                    ? "chevron-up-circle"
                    : "chevron-down-circle"
                }
              />
            </TouchableOpacity>
            {expandedSections[sectionHeader]
              ? pdgaOfficialRules[sectionHeader]
              : null}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRowContainer: {
    height: moderateScale(60),
    alignItems: "center",
    borderBottomColor: Colors.grayscale[5],
    marginHorizontal: moderateScale(15),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
});

export default OfficialRules;

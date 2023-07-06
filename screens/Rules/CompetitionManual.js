import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

import pdgaCompetitionManual from "./pdgaCompetitionManual";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const CompetitionManual = ({ isDarkMode, activeLanguage }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [ModalContent, setModalContent] = useState(null);

  // TODOS hook modal up underlined text, e.g. 804.01D

  let Cmp;

  return (
    <ScrollView>
      {Object.entries(pdgaCompetitionManual).map(
        ([sectionHeader, sectionBody]) => {
          const isExpanded = expandedSections[sectionHeader];

          Cmp = pdgaCompetitionManual[sectionHeader];

          return (
            <View key={sectionHeader}>
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
              {expandedSections[sectionHeader] ? (
                <Cmp
                  activeLanguage={activeLanguage}
                  isDarkMode={isDarkMode}
                  setModalContent={setModalContent}
                  setModalVisible={setModalVisible}
                />
              ) : null}
            </View>
          );
        }
      )}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
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

export default CompetitionManual;

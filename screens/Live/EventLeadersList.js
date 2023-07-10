import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  Image,
} from "react-native";

import fetchEventTopPlayers from "../../sampleData/fetchEventTopPlayers";
import { moderateScale } from "react-native-size-matters";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function makeHeaderRow(data) {
  return (
    <View style={styles.headerRowContainer}>
      <View style={styles.headerRowTitleContainer}>
        <Text style={styles.headerRowTitleText}>{data.division}</Text>
      </View>
      <View style={styles.headerRowCHContainer}>
        <Text style={styles.headerRowText}>Tot</Text>
      </View>
      <View style={styles.headerRowCHContainer}>
        <Text style={styles.headerRowText}>Rd</Text>
      </View>
      <View style={styles.headerRowCHContainer}>
        <Text style={styles.headerRowText}>Thru</Text>
      </View>
    </View>
  );
}

function makeScoreRow(data) {
  let dataSource = require("../../sampleData/placeholder-person2.jpeg");

  if (data.Name === "Gannon Buhr") {
    dataSource = require("../../sampleData/Gannon-Buhr.jpeg");
  } else if (data.Name === "Ali Smith") {
    dataSource = require("../../sampleData/ali_smith_thumbnail.jpeg");
  } else if (data.Name === "Joseph Anderson") {
    dataSource = require("../../sampleData/joseph-anderson.jpeg");
  } else if (data.Name === "Sullivan Tipton") {
    dataSource = require("../../sampleData/sullivan-t.jpeg");
  } else if (data.Name === "Holyn Handley") {
    dataSource = require("../../sampleData/holyn.jpeg");
  } else if (data.Name === "Hanna Huynh") {
    dataSource = require("../../sampleData/hanna-huynh.jpeg");
  } else if (data.Name === "Lisa Fajkus") {
    dataSource = require("../../sampleData/lisa-fajkus.jpeg");
  }

  return (
    <View style={styles.rowContainer}>
      <View style={styles.rowPlaceContainer}>
        <Text style={styles.rowPlaceText}>{data.RunningPlace}</Text>
      </View>
      <View style={styles.rowPicContainer}>
        <Image style={styles.playerThumbnail} source={dataSource} />
        <View style={styles.flagIconContainer}>
          <Text>🇺🇸</Text>
        </View>
      </View>
      <View style={styles.rowPlayerDataContainer}>
        <Text style={styles.rowPlayerNameText}>{data.Name}</Text>
      </View>
      <View style={styles.rowScoreContainer}>
        <Text style={styles.rowText}>{data.ToPar}</Text>
      </View>
      <View style={styles.rowScoreContainer}>
        <Text style={styles.rowText}>{data.RoundtoPar}</Text>
      </View>
      <View style={styles.rowScoreContainer}>
        <Text style={styles.rowThruText}>F</Text>
      </View>
    </View>
  );
}

const EventLeadersList = () => {
  const listData = [...fetchEventTopPlayers.data.DivisionStandings];

  const [expandedRows, setExpandedRows] = useState({});

  const toRender = [];

  for (let i = 0; i < listData.length; i++) {
    // add header row
    toRender.push(makeHeaderRow(listData[i]));

    // add rows
    listData[i].scores.forEach((s) => {
      toRender.push(makeScoreRow(s));
    });

    // add full scores btn
    toRender.push(
      <View style={styles.fullScoreNavRow}>
        <Pressable style={styles.fullScoreBtn}>
          <Text
            style={styles.fullScoreBtnText}
          >{`FULL ${listData[i].division} SCORES`}</Text>
          <Ionicons
            name="arrow-forward"
            color={"black"}
            size={moderateScale(12)}
          />
        </Pressable>
      </View>
    );
  }

  return <ScrollView style={styles.listContainer}>{toRender}</ScrollView>;
};

const styles = StyleSheet.create({
  headerRowContainer: {
    flexDirection: "row",
    marginHorizontal: moderateScale(10),
    height: moderateScale(20),
    marginBottom: moderateScale(5),
  },
  rowContainer: {
    flexDirection: "row",
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(4),
    borderRadius: moderateScale(7),
    height: moderateScale(70),
    backgroundColor: Colors.white,
  },
  listContainer: {
    marginHorizontal: moderateScale(10),
    marginBottom: moderateScale(330),
  },
  headerRowTitleContainer: {
    justifyContent: "flex-end",
    flex: 1,
  },
  headerRowCHContainer: {
    width: moderateScale(40),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerRowTitleText: {
    fontWeight: "bold",
    fontSize: moderateScale(13),
    marginLeft: moderateScale(15),
  },
  flagIconContainer: {
    position: "absolute",
    bottom: moderateScale(6),
    right: moderateScale(6),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    height: moderateScale(15),
    width: moderateScale(15),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  headerRowText: {
    fontWeight: "bold",
    fontSize: moderateScale(11),
  },
  rowPlaceContainer: {
    width: moderateScale(25),
    justifyContent: "center",
    alignItems: "center",
  },
  rowPlaceText: {
    fontWeight: "bold",
    color: Colors.grayscale[5],
  },
  rowPicContainer: {
    borderRadius: moderateScale(30),
    width: moderateScale(60),
    alignItems: "center",
    justifyContent: "center",
  },
  rowPlayerDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: moderateScale(10),
  },
  rowScoreContainer: {
    width: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  rowText: {
    fontSize: moderateScale(12),
  },
  rowThruText: {
    fontSize: moderateScale(12),
    color: Colors.primary.main,
  },
  rowPlayerNameText: {
    fontWeight: "bold",
    fontSize: moderateScale(13),
  },
  fullScoreNavRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: moderateScale(10),
    marginBottom: moderateScale(25),
  },
  fullScoreBtn: {
    flexDirection: "row",
    borderBottomColor: Colors.primary.main,
    borderBottomWidth: moderateScale(1.5),
  },
  fullScoreBtnText: {
    fontSize: moderateScale(10),
    fontWeight: "bold",
  },
  playerThumbnail: {
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: moderateScale(30),
  },
});

export default EventLeadersList;

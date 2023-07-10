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
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import ExpandedPlayerInfo from "./ExpandedPlayerInfo";

import fetchEventTopPlayers from "../../sampleData/fetchEventTopPlayers";
import round1Results from "../../sampleData/round1Results";
import round2Results from "../../sampleData/round2Results";

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

function makeScoreRow(data, expandedRows, setExpandedRows) {
  let imgSrc = require("../../sampleData/placeholder-person2.jpeg");

  if (data.Name === "Gannon Buhr") {
    imgSrc = require("../../sampleData/Gannon-Buhr.jpeg");
  } else if (data.Name === "Ali Smith") {
    imgSrc = require("../../sampleData/ali_smith_thumbnail.jpeg");
  } else if (data.Name === "Joseph Anderson") {
    imgSrc = require("../../sampleData/joseph-anderson.jpeg");
  } else if (data.Name === "Sullivan Tipton") {
    imgSrc = require("../../sampleData/sullivan-t.jpeg");
  } else if (data.Name === "Holyn Handley") {
    imgSrc = require("../../sampleData/holyn.jpeg");
  } else if (data.Name === "Hanna Huynh") {
    imgSrc = require("../../sampleData/hanna-huynh.jpeg");
  } else if (data.Name === "Lisa Fajkus") {
    imgSrc = require("../../sampleData/lisa-fajkus.jpeg");
  }

  return (
    <View key={data.ResultID}>
      <Pressable
        onPress={() => {
          setExpandedRows({
            ...expandedRows,
            [data.ResultID]: !expandedRows[data.ResultID],
          });
        }}
        style={styles.rowContainer}
      >
        <View style={styles.rowPlaceContainer}>
          <Text style={styles.rowPlaceText}>{`${data.Tied ? "T" : ""}${
            data.RunningPlace
          }`}</Text>
        </View>
        <View style={styles.rowPicContainer}>
          <Image style={styles.playerThumbnail} source={imgSrc} />
          <View style={styles.flagIconContainer}>
            <Text>🇺🇸</Text>
          </View>
        </View>
        <View style={styles.rowPlayerDataContainer}>
          <Text style={styles.rowPlayerNameText}>{data.Name}</Text>
        </View>
        <View style={styles.rowScoreContainer}>
          <Text style={styles.rowText}>
            {data.ParThruRound < 0
              ? data.ParThruRound
              : data.ParThruRound === 0
              ? "E"
              : "+" + data.ParThruRound}
          </Text>
        </View>
        <View style={styles.rowScoreContainer}>
          <Text style={styles.rowText}>
            {data.RoundtoPar < 0
              ? data.RoundtoPar
              : data.RoundtoPar === 0
              ? "E"
              : "+" + data.RoundtoPar}
          </Text>
        </View>
        <View style={styles.rowScoreContainer}>
          <Text style={styles.rowThruText}>F</Text>
        </View>
      </Pressable>
      {expandedRows[data.ResultID] ? (
        <ExpandedPlayerInfo data={data} imgSrc={imgSrc} />
      ) : null}
    </View>
  );
}

const EventLeadersList = ({ activeRound }) => {
  let listData = [...fetchEventTopPlayers.data.DivisionStandings];

  if (activeRound === 1) {
    listData = [...round1Results.data.DivisionStandings];
  } else if (activeRound === 2) {
    listData = [...round2Results.data.DivisionStandings];
  }

  const [expandedRows, setExpandedRows] = useState({});

  const toRender = [];

  for (let i = 0; i < listData.length; i++) {
    // add header row
    toRender.push(makeHeaderRow(listData[i]));

    // add rows
    listData[i].scores.forEach((s) => {
      toRender.push(makeScoreRow(s, expandedRows, setExpandedRows));
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
    bottom: moderateScale(7),
    right: moderateScale(7),
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
    height: moderateScale(70),
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

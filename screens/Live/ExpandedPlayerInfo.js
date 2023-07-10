import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { moderateScale } from "react-native-size-matters";

import fetchPlayerAliSmith from "../../sampleData/fetchPlayerAliSmith";
import fetchPlayerGannonBuhr from "../../sampleData/fetchPlayerGannonBuhr";
import Colors from "../../constants/Colors";

const ExpandedPlayerInfoRow = ({ data, imgSrc }) => {
  let playerData = fetchPlayerAliSmith.data;
  if (data.Name === "Gannon Buhr") {
    playerData = fetchPlayerGannonBuhr.data;
  }

  const [activePlayerRound, setActivePlayerRound] = useState(3);

  // kc_todo replace flag with an Image
  return (
    <View style={styles.expandedRowContainer}>
      <View style={styles.expandedPlayerInfoContainer}>
        <Image style={styles.expandedPlayerPic} source={imgSrc} />
        <View style={styles.expandedPlayerInfo}>
          <View style={styles.playerPicMask} />
          <Text style={styles.expandedPlayerInfoNameText}>
            {playerData.Name}
          </Text>
          <Text style={styles.expandedPlayerInfoLocationText}>
            {playerData.Location}
          </Text>
          <View style={styles.expandedPlayerPdgaInfoContainer}>
            <View style={styles.expandedFlagIconContainer}>
              <Text style={styles.expandedFlagText}>🇺🇸</Text>
            </View>
            <Text
              style={styles.expandedPlayerPdgaInfoText}
            >{`#${playerData.PDGANum}`}</Text>
            <View style={styles.ratingDiamond}>
              <Text style={styles.ratingText}>R</Text>
            </View>
            <Text
              style={styles.expandedPlayerPdgaInfoText}
            >{`${playerData.Rating}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.expandedRoundSummaryContainer}>
        <View style={styles.expandedRoundSummarySubcontainer}>
          <Text style={styles.expandedRoundSummarySubheaderText}>Total</Text>
          <Text style={styles.expandedRoundSummaryTotalText}>{data.ToPar}</Text>
        </View>
        <View style={{ width: 1, backgroundColor: Colors.grayscale[2] }} />
        <View style={styles.expandedRoundSummarySubcontainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.smallRatingDiamond}>
              <Text style={styles.smallRatingText}>R</Text>
            </View>
            <Text style={styles.expandedRoundSummarySubheaderText}>Event</Text>
          </View>
          <Text style={styles.expandedRoundSummaryTotalText}>
            {playerData.AverageRoundRating}
            {playerData.RatingDiff > 0 ? (
              <Text
                style={{
                  ...styles.expandedRoundSummaryTotalText,
                  color: "lightgreen",
                }}
              >{` ^${playerData.RatingDiff}`}</Text>
            ) : null}
          </Text>
        </View>
      </View>
      <View style={styles.expandedRoundNavContainer}>
        <Pressable
          onPress={() => setActivePlayerRound(1)}
          style={{
            ...styles.activePlayerRoundNavTab,
            borderBottomWidth: activePlayerRound === 1 ? 2 : 0,
            backgroundColor:
              activePlayerRound === 1 ? Colors.grayscale[8] : null,
          }}
        >
          <Text>ROUND 1</Text>
        </Pressable>
        <Pressable
          onPress={() => setActivePlayerRound(2)}
          style={{
            ...styles.activePlayerRoundNavTab,
            borderBottomWidth: activePlayerRound === 2 ? 2 : 0,
            backgroundColor:
              activePlayerRound === 2 ? Colors.grayscale[8] : null,
          }}
        >
          <Text>ROUND 2</Text>
        </Pressable>
        <Pressable
          onPress={() => setActivePlayerRound(3)}
          style={{
            ...styles.activePlayerRoundNavTab,
            borderBottomWidth: activePlayerRound === 3 ? 2 : 0,
            backgroundColor:
              activePlayerRound === 3 ? Colors.grayscale[8] : null,
          }}
        >
          <Text>ROUND 3</Text>
        </Pressable>
      </View>
      <View style={styles.expandedRoundHeaderContainer}></View>
      <View style={styles.expandedHoleDetailsContainer}></View>
      <View style={styles.expandedCourseMetadataContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  expandedRowContainer: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(-8),
    borderBottomLeftRadius: moderateScale(7),
    borderBottomRightRadius: moderateScale(7),
  },
  expandedPlayerInfoContainer: {
    flexDirection: "row",
    overflow: "hidden",
  },
  expandedPlayerPic: {
    height: moderateScale(120),
    width: moderateScale(100),
    borderBottomLeftRadius: moderateScale(7),
  },
  expandedPlayerInfoNameText: {
    color: Colors.white,
    marginTop: moderateScale(3),
    fontSize: moderateScale(21),
  },
  expandedPlayerInfoLocationText: {
    color: Colors.grayscale[4],
    fontSize: moderateScale(12),
  },
  expandedPlayerInfo: {
    backgroundColor: Colors.grayscale[1],
    flex: 1,
    padding: moderateScale(15),
  },
  expandedPlayerPdgaInfoContainer: {
    marginTop: moderateScale(5),
    backgroundColor: Colors.grayscale[2],
    padding: moderateScale(8),
    flexDirection: "row",
    borderRadius: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  expandedFlagIconContainer: {
    borderRadius: moderateScale(10),
    height: moderateScale(15),
    width: moderateScale(15),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(6),
  },
  expandedFlagText: {
    fontSize: moderateScale(60),
    marginTop: moderateScale(-30),
    marginLeft: moderateScale(-20),
  },
  expandedPlayerPdgaInfoText: {
    marginLeft: moderateScale(3),
    color: Colors.white,
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  expandedRoundSummaryContainer: {
    flexDirection: "row",
    marginTop: -1,
    height: moderateScale(42),
  },
  expandedRoundSummarySubcontainer: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  expandedRoundSummarySubheaderText: {
    color: Colors.grayscale[3],
    fontWeight: "bold",
    fontSize: moderateScale(11),
  },
  expandedRoundSummaryTotalText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  expandedRoundNavContainer: {
    flexDirection: "row",
    height: moderateScale(35),
    backgroundColor: Colors.white,
  },
  expandedRoundHeaderContainer: {
    flexDirection: "row",
  },
  expandedHoleDetailsContainer: {
    flexDirection: "row",
  },
  expandedCourseMetadataContainer: {
    flexDirection: "row",
  },
  ratingDiamond: {
    marginLeft: moderateScale(8),
    backgroundColor: Colors.white,
    height: moderateScale(9),
    width: moderateScale(9),
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
  },
  ratingText: {
    fontSize: 8,
    fontWeight: "bold",
    transform: [{ rotate: "-45deg" }],
  },
  smallRatingDiamond: {
    marginRight: moderateScale(3),
    backgroundColor: Colors.grayscale[6],
    height: moderateScale(6),
    width: moderateScale(6),
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
  },
  smallRatingText: {
    fontSize: 5,
    fontWeight: "bold",
    transform: [{ rotate: "-45deg" }],
  },
  playerPicMask: {
    backgroundColor: Colors.grayscale[1],
    width: moderateScale(30),
    left: moderateScale(0),
    top: moderateScale(-20),
    height: moderateScale(300),
    position: "absolute",
    transform: [{ rotate: "-6deg" }],
  },
  activePlayerRoundNavTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: Colors.black,
  },
});

export default ExpandedPlayerInfoRow;

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { moderateScale } from "react-native-size-matters";

import fetchPlayerAliSmith from "../../sampleData/fetchPlayerAliSmith";
import fetchPlayerGannonBuhr from "../../sampleData/fetchPlayerGannonBuhr";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function makeHoleReport(data, holeNumber) {
  let holeScore =
    data.HoleScores[holeNumber] - data.Layout.Detail[holeNumber].Par;

  let backgroundColor = null;
  let color = "black";
  let borderRadius = 0;

  if (holeScore === -2) {
    backgroundColor = "darkgreen";
    color = "white";
    borderRadius = 100;
  } else if (holeScore === -1) {
    backgroundColor = "green";
    color = "white";
    borderRadius = 100;
  } else if (holeScore === 1) {
    backgroundColor = "lightgray";
    borderRadius = 4;
  } else if (holeScore > 1) {
    backgroundColor = "gray";
    borderRadius = 4;
  }

  return (
    <View
      style={{ ...styles.scorecardHoleContainer, width: `${(1 / 9) * 100}%` }}
      key={"hole" + holeNumber}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: moderateScale(10),
          marginVertical: moderateScale(2),
        }}
      >
        {holeNumber}
      </Text>
      <Text style={{ fontStyle: "italic", fontSize: moderateScale(8) }}>
        {data.Layout.Detail[holeNumber].Length}
      </Text>
      <Text
        style={{
          fontSize: moderateScale(10),
          marginVertical: moderateScale(2),
        }}
      >
        {data.Layout.Detail[holeNumber].Par}
      </Text>
      <View
        style={{
          marginBottom: moderateScale(12),
          backgroundColor,
          paddingHorizontal: moderateScale(5),
          paddingVertical: moderateScale(2),
          borderRadius,
        }}
      >
        <Text
          style={{ fontSize: moderateScale(11), color, fontWeight: "bold" }}
        >
          {data.HoleScores[holeNumber]}
        </Text>
      </View>
    </View>
  );
}

function makeScoreReport(roundData) {
  return (
    <View style={styles.scorecardContainer}>
      {Object.keys(roundData.HoleScores).map((hole) =>
        makeHoleReport(roundData, hole)
      )}
    </View>
  );
}

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
          <Text style={styles.expandedRoundSummaryTotalText}>
            {playerData.ToPar}
          </Text>
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
          <Text style={{ fontSize: 12, color: Colors.grayscale[2] }}>
            ROUND 1
          </Text>
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
          <Text style={{ fontSize: 12, color: Colors.grayscale[2] }}>
            ROUND 2
          </Text>
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
          <Text style={{ fontSize: 12, color: Colors.grayscale[2] }}>
            ROUND 3
          </Text>
        </Pressable>
      </View>
      <View style={styles.expandedRoundHeaderContainer}>
        <View style={styles.roundScoreContainer}>
          <Text style={styles.roundScoreText}>
            {playerData.Scores[activePlayerRound - 1].RoundToPar}
          </Text>
        </View>
        <View style={styles.roundRatingContainer}>
          <View style={styles.smallRatingDiamond}>
            <Text style={styles.smallRatingText}>R</Text>
          </View>
          <Text style={styles.roundRatingText}>
            {playerData.Scores[activePlayerRound - 1].RoundRating}
          </Text>
        </View>
        <View style={styles.courseInfoContainer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(11),
              marginRight: moderateScale(4),
            }}
          >
            Par
          </Text>
          <Text
            style={{
              fontSize: moderateScale(11),
              color: Colors.grayscale[4],
              marginRight: moderateScale(8),
            }}
          >
            {playerData.Scores[activePlayerRound - 1].Layout.Par}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(11),
              marginRight: moderateScale(4),
            }}
          >
            Dist
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              fontSize: moderateScale(11),
              color: Colors.grayscale[4],
              marginRight: moderateScale(8),
            }}
          >
            {playerData.Scores[activePlayerRound - 1].Layout.Length}'
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(11),
              marginRight: moderateScale(4),
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(13),
              color: "green",
            }}
          >
            {playerData.Scores[activePlayerRound - 1].RoundScore}
          </Text>
        </View>
      </View>
      <View style={styles.expandedHoleDetailsContainer}>
        {makeScoreReport(playerData.Scores[activePlayerRound - 1])}
      </View>
      <View style={styles.expandedCourseMetadataContainer}>
        <Ionicons
          name="map-outline"
          color={Colors.primary.main}
          size={moderateScale(11)}
        />
        <Text
          style={{
            fontSize: moderateScale(10),
            marginLeft: 5,
            marginRight: 10,
            color: Colors.grayscale[3],
          }}
        >
          {playerData.Scores[activePlayerRound - 1].Layout.ShortCourseName}
        </Text>
        <Ionicons
          name="flag-outline"
          color={Colors.primary.main}
          size={moderateScale(11)}
        />
        <Text
          style={{
            fontSize: moderateScale(10),
            marginLeft: 5,
            marginRight: 10,
            color: Colors.grayscale[3],
          }}
        >
          {playerData.Scores[activePlayerRound - 1].Layout.ShortName}
        </Text>
        <Ionicons
          name="basket-outline"
          color={Colors.primary.main}
          size={moderateScale(11)}
        />
        <Text
          style={{
            fontSize: moderateScale(10),
            marginLeft: 5,
            marginRight: 10,
            color: Colors.grayscale[3],
          }}
        >
          {playerData.Scores[activePlayerRound - 1].Layout.Holes}
        </Text>
      </View>
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
    height: moderateScale(45),
  },
  expandedHoleDetailsContainer: {
    flexDirection: "row",
  },
  expandedCourseMetadataContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingBottom: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
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
  roundScoreContainer: {
    backgroundColor: "darkgreen",
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(40),
  },
  roundScoreText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: moderateScale(13),
  },
  roundRatingContainer: {
    flexDirection: "row",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(60),
  },
  roundRatingText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: moderateScale(11),
  },
  courseInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: moderateScale(12),
    flex: 1,
    backgroundColor: Colors.grayscale[8],
  },
  scorecardContainer: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: Colors.white,
    padding: moderateScale(10),
  },
  scorecardHoleContainer: {
    alignItems: "center",
    justifyContent: "center",
    // width: moderateScale(30),
  },
});

export default ExpandedPlayerInfoRow;

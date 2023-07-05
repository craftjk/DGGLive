import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  expandedSectionContainer: {
    paddingHorizontal: moderateScale(5),
    paddingRight: moderateScale(20),
    paddingBottom: moderateScale(15),

    borderBottomWidth: 1,
    borderBottomColor: Colors.grayscale[5],
    marginHorizontal: moderateScale(10),
  },
  indentedSectionContainer: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.grayscale[5],
  },
  indentedTextContainer: {
    flexDirection: "row",
    paddingLeft: moderateScale(15),
  },
  dblIndentedTextContainer: {
    flexDirection: "row",
    paddingLeft: moderateScale(40),
  },
  subheaderContainer: {
    padding: moderateScale(10),
  },
  subheaderText: {
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  alphaBullet: {
    fontSize: moderateScale(12),
    marginRight: moderateScale(5),
  },
  plainText: {
    fontSize: moderateScale(12),
    marginBottom: moderateScale(10),
  },
  spacer: {
    height: moderateScale(15),
  },
});

const expanded800 = (
  <View style={styles.expandedSectionContainer}>
    <Text style={styles.plainText}>
      The object of the game of disc golf is to complete a course in the fewest
      throws of the disc. A course typically consists of nine or eighteen holes,
      each of which is a separate unit for scoring.
      {`

`}
      Play on each hole begins at the tee and ends at the target. After the
      player has thrown from the tee, each successive throw is made from where
      the previous throw came to rest. On completing a hole, the player proceeds
      to the teeing area of the next hole, until all holes have been played.
      {`

`}
      Disc golf courses are normally laid out in and around wooded areas with
      diverse terrain to provide natural obstacles to the flight of the disc.
      The course must not be altered by the player in any way to decrease the
      difficulty of a hole. Players must play the course as they find it and
      play the disc where it lies unless otherwise allowed by these rules.
    </Text>
  </View>
);

const expanded801 = (
  <View
    style={{
      ...styles.expandedSectionContainer,
      ...styles.indentedSectionContainer,
    }}
  >
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>801.01 Fairness</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        These rules have been designed to promote fair play for all disc
        golfers. In using these rules, the player should apply the rule that
        most directly addresses the situation at hand. If any point in dispute
        is not covered by the rules, the decision is made in accordance with
        fairness. Often a logical extension of the closest existing rule or the
        principles embodied in these rules will provide guidance for determining
        fairness.
      </Text>
    </View>
    <View style={styles.spacer} />

    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>801.02 Enforcement</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        Players are assigned to play holes together in a{" "}
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>group</Text>{" "}
        for the purpose of verifying scores and ensuring play in accordance with
        the rules. Any determination made by the group as a whole is to be made
        by a majority of the group.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        Players are expected to call a violation when one has clearly occurred.
        A call must be made promptly to be enforceable (except for misplays).
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        A player in the group may call or confirm a rules violation on any
        player in the group by notifying all players in the group.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>D.</Text>
      <Text style={styles.plainText}>
        A{" "}
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>
          warning
        </Text>{" "}
        is the initial advisement a player is given for violating certain rules;
        subsequent violations of the rule incur penalty throws. A call for a
        rules violation that results in a warning does not need to be confirmed
        to be enforced. Warnings do not carry over from one round to the next,
        nor to a playoff.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>E.</Text>
      <Text style={styles.plainText}>
        A call made by a player for a rules violation that results in one or
        more penalty throws can only be enforced if the call is confirmed by
        another player in the group or by a Tournament Official. A penalty throw
        is a throw added to a player's score for violating a rule, or for
        relocation of the lie as called for by a rule.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>F.</Text>
      <Text style={styles.plainText}>
        A
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>
          Tournament Official
        </Text>
        , or{" "}
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>
          Official
        </Text>
        , is a person who is authorized by the Director to make judgments
        regarding the proper application of the rules during play. An Official
        may call or confirm a rule violation by any player. An Official's call
        does not need to be confirmed to be enforced. An Official who is playing
        may not act as an Official for players who are in their division.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>G.</Text>
      <Text style={styles.plainText}>
        The{" "}
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>
          Director
        </Text>{" "}
        is the person in charge of the tournament or event. The Director may be
        a Tournament Director (TD), a Course Director, or a League Director.
        Only the Director may disqualify a player. Decisions made by the
        Director are final.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>H.</Text>
      <Text style={styles.plainText}>
        A throw or an action that is subject to penalty under more than one rule
        is played under the rule that results in the most penalty throws; or,
        among rules that call for an equal number of penalty throws, the rule
        that was first violated.
      </Text>
    </View>
    <View style={styles.spacer} />

    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>801.03 Appeals</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        When a group cannot reach a majority decision regarding a rule, the
        ruling is based on the interpretation that is most beneficial to the
        thrower.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        A player may appeal a group decision to an Official, or an Official's
        decision to the Director, by clearly and promptly stating that desire to
        the group. If an Official or the Director is readily available, the
        group may stand aside and allow other groups to play through while the
        appeal is being heard.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        If an Official or Director is not readily available, the thrower may
        make a set of provisional throws for each additional possible outcome of
        the ruling, and later appeal the ruling to an Official or to the
        Director when practical.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>D.</Text>
      <Text style={styles.plainText}>
        If a ruling is overturned, an Official or the Director may adjust the
        player's score to reflect the correct interpretation of the rules.
        Alternatively, the Director may have the player replay one or more
        holes. Rulings by the Director are final.
      </Text>
      <View style={styles.spacer} />
    </View>
  </View>
);

const expanded802 = (
  <View
    style={{
      ...styles.expandedSectionContainer,
      ...styles.indentedSectionContainer,
    }}
  >
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>802.01 Throw</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        Throwing order on the tee of the first hole is the order in which the
        players are listed on the scorecard(s).
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        Each throw that is made as a competitive attempt to change the lie is
        counted, unless by rule it is disregarded.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        For a throw that is disregarded, any penalty throws associated with
        making that throw are also disregarded. Penalties that are associated
        with making a throw are those for: out-of-bounds, hazard, missed
        mandatory, above two meters, stance, marking, taking improper relief,
        and lost disc.
      </Text>
    </View>
    <View style={styles.spacer} />
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>802.02 Order of Play</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        Players are assigned to play holes together in a{" "}
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>group</Text>{" "}
        for the purpose of verifying scores and ensuring play in accordance with
        the rules. Any determination made by the group as a whole is to be made
        by a majority of the group.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        Throwing order on all subsequent tees is determined by the scores on the
        previous hole, so that the player with the lowest score throws first,
        and so on. Ties do not change the throwing order.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        After all players have a lie other than the teeing area, the player
        whose lie is farthest from the target (the away player) is next in the
        throwing order.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>D.</Text>
      <Text style={styles.plainText}>
        If a player is making another throw from the same lie, or a re-throw,
        that player remains next in the throwing order. A re-throw is an
        additional throw from the same lie which is played instead of the
        original throw.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>E.</Text>
      <Text style={styles.plainText}>
        To facilitate flow of play, a player who is not next may throw if the
        player who is next consents, or if throwing will not impact the player
        who is next.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>F.</Text>
      <Text style={styles.plainText}>
        Throwing out of order is a courtesy violation.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>G.</Text>
      <Text style={styles.plainText}>
        During tournament play, no group may play through the group ahead unless
        directed by an Official, or if the group ahead is standing aside in
        accordance with the rules.
      </Text>
    </View>
    <View style={styles.spacer} />
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>802.03 Excessive Time</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        A player has taken excessive time if they are present and have not
        thrown within 30 seconds:
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>1.</Text>
      <Text style={styles.plainText}>
        After the previous player has thrown; and,
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>2.</Text>
      <Text style={styles.plainText}>
        After they have had a reasonable amount of time to arrive at and
        determine the lie; and,
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>3.</Text>
      <Text style={styles.plainText}>
        After they are next in the throwing order; and,
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>4.</Text>
      <Text style={styles.plainText}>
        During which the playing area remains clear.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        A player who takes excessive time receives a warning for the first
        violation. A player who takes excessive time after having been warned
        for it during the round receives one penalty throw. See 811.F.5 for a
        player who is absent when it is their turn to throw.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        A player may request extra time from the group to take a bathroom break.
        If the player does not return in a reasonable time, the player is
        considered missing for the hole and receives a score of par plus four on
        the hole.
      </Text>
    </View>
    <View style={styles.spacer} />
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>802.04 Teeing Off</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        Play begins on each hole with the player throwing from within the hole's
        teeing area. A teeing area, or tee, is the area bounded by the edges of
        a tee pad, if provided. Otherwise, it is the area extending three meters
        perpendicularly behind the designated tee line. The tee line is the line
        at the front of the teeing area, or the line between the outside edges
        of two tee markers.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        When the disc is released, the player must have at least one supporting
        point within the teeing area, and all supporting points must be within
        the teeing area. A supporting point is any part of the player's body
        that is, at the time of release, in contact with the playing surface or
        any other object that provides support. The player is allowed to have a
        supporting point outside the teeing area before or after, but not at,
        the moment the disc is released.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        A player who violates 802.04.B has committed a stance violation and
        receives one penalty throw.
      </Text>
    </View>
    <View style={styles.spacer} />
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>802.06 Marking the Lie</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        The position of a thrown disc on the in-bounds playing surface marks the
        lie.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        Alternatively, the player may mark the lie by placing a mini marker disc
        on the playing surface, touching the front of the thrown disc on the
        line of play. A mini marker disc is a small disc, not used in play, that
        complies with PDGA Technical Standards for mini marker discs.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        When the thrown disc is not on the in-bounds playing surface, or when
        the lie is to be moved by rule, the player marks the lie by placing a
        mini marker disc in accordance with the applicable rule.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>D.</Text>
      <Text style={styles.plainText}>
        Throwing from a lie marked in a manner other than described above is a
        marking violation. A player receives a warning for the first marking
        violation. A player receives one penalty throw for each subsequent
        violation of any marking rule during the round.
      </Text>
    </View>
    <View style={styles.spacer} />
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>802.07 Stance</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        If the lie has been marked by a marker disc, then when the disc is
        released, the player must:
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>1.</Text>
      <Text style={styles.plainText}>
        Have at least one supporting point that is in contact with the lie; and,
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>2.</Text>
      <Text style={styles.plainText}>
        Have no supporting point closer to the target than the rear edge of the
        marker disc; and,
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>3.</Text>
      <Text style={styles.plainText}>
        Have all supporting points in-bounds.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        A drop zone is played as either a teeing area (see 802.04.B) or a marked
        lie (see 802.07.A).
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        A player who violates 802.07.A or 802.07.B has committed a stance
        violation and receives one penalty throw.
      </Text>
    </View>
    <View style={styles.spacer} />
  </View>
);

const expanded803 = (
  <View
    style={{
      ...styles.expandedSectionContainer,
      ...styles.indentedSectionContainer,
    }}
  >
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>803.01 Moving Obstacles</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        A player must choose the stance that results in the least movement of
        any obstacle that is a permanent or integral part of the course. Once a
        stance has been taken, the player may not move an obstacle in order to
        make room for a throwing motion. It is legal for a player's throwing
        motion to cause incidental movement of an obstacle.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        A player is not allowed to move any obstacle on the course, with the
        following exceptions:
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>1.</Text>
      <Text style={styles.plainText}>
        A player may move casual obstacles that are on the playing surface where
        a supporting point may be placed when taking a stance. A casual obstacle
        is any item or collection of loose debris (such as stones, leaves,
        twigs, or unconnected branches), or any item as designated by the
        Director. Objects intentionally placed as part of the course or event
        are not casual obstacles.
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>2.</Text>
      <Text style={styles.plainText}>
        A player may request that other people move themselves or their
        belongings.
      </Text>
    </View>
    <View style={styles.dblIndentedTextContainer}>
      <Text style={styles.alphaBullet}>3.</Text>
      <Text style={styles.plainText}>
        A player may restore course equipment to its proper working order,
        including the removal of obstacles.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        A player who moves any obstacle on the course other than as allowed
        above receives one penalty throw.
      </Text>
    </View>
    <View style={styles.spacer} />

    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>803.02 Relief from Obstacles</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        A player may obtain relief from the following obstacles that are on or
        behind the lie: harmful insects or animals, people, or any item as
        designated by the Director. To obtain relief, the player may mark a new
        lie that is on the line of play, farther from the target, at the nearest
        point that provides relief (unless greater relief is announced by the
        Director).
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        If an obstacle physically prevents the player from taking a legal stance
        behind the marker disc, or from marking a disc above or below the
        playing surface, the player may mark a new lie on the line of play
        immediately behind that obstacle.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        A player who takes relief other than as allowed by rule above receives
        one penalty throw.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>D.</Text>
      <Text style={styles.plainText}>
        A player may elect at any time to take optional relief by declaring
        their intention to the group. The lie may then be relocated by marking a
        new lie which is farther from the target and is on the line of play. One
        penalty throw is added to the player's score.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>E.</Text>
      <Text style={styles.plainText}>
        No penalty throw is added if optional relief is being taken following a
        penalty taken for a disc out-of-bounds or above two meters.
      </Text>
    </View>
    <View style={styles.spacer} />

    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>803.03 Damaging the Course</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        A player who intentionally damages any part of the course receives two
        penalty throws. The player may also be disqualified from the tournament,
        in accordance with Section 3.03 of the Competition Manual.
      </Text>
    </View>
    <View style={styles.spacer} />
  </View>
);

const expanded804 = (
  <View
    style={{
      ...styles.expandedSectionContainer,
      ...styles.indentedSectionContainer,
    }}
  >
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>804.01 Mandatory Routes</Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>A.</Text>
      <Text style={styles.plainText}>
        A{" "}
        <Text style={{ ...styles.plainText, fontStyle: "italic" }}>
          mandatory route
        </Text>{" "}
        restricts the path the disc may take in the process of playing a hole.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>B.</Text>
      <Text style={styles.plainText}>
        The restricted plane is a vertical plane marked by one or more objects
        or other markers which define the edges of the space.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>C.</Text>
      <Text style={styles.plainText}>
        If part of a thrown disc clearly enters into a restricted plane, the
        player receives one penalty throw. The lie for the next throw is the
        drop zone for that mandatory. If no drop zone has been designated, the
        lie for the next throw is the previous lie.
      </Text>
    </View>
    <View style={styles.indentedTextContainer}>
      <Text style={styles.alphaBullet}>D.</Text>
      <Text style={styles.plainText}>
        If the thrown disc is released on the other side of the restricted space
        plane compared to the rear edge of the marker disc, the player has
        missed the mandatory. The next lie and penalty are the same as{" "}
        <Text
          onPress={() => {}}
          style={{
            ...styles.plainText,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          804.01.C.
        </Text>
      </Text>
    </View>
    <View style={styles.spacer} />
  </View>
);

export default {
  "800. Description of the Game": expanded800,
  "801. Application of the Rules": expanded801,
  "802. Throwing": expanded802,
  "803. Obstacles and Relief": expanded803,
  "804. Regulated Routes": expanded804,
  "Dev note: 805-813, appx. A-E not shown": "",
};

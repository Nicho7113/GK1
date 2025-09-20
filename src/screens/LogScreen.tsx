import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import { useRatedGames } from "@/state/RatedGamesContext";
import { useIsFocused } from '@react-navigation/native';
import { games } from "@/data/games";
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from "@/styles/globalStyles/ScreensStyle";
import { semantic } from "@/theme/semantic";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LogScreen() {
  const isFocused = useIsFocused();
  const { ratedGames } = useRatedGames();
  const ratedGameData = ratedGames
    .map(rg => {
      const game = games.find(g => g.id === rg.id);
      return game ? { ...game, score: rg.score } : undefined;
    })
    .filter((g): g is typeof games[0] & { score: number } => !!g);

  React.useEffect(() => {
  //  console.log('Rated Games in LogScreen:', ratedGames);
   // console.log('Rated Game Data:', ratedGameData);
  }, [ratedGames, ratedGameData, isFocused]);

  return (
    <SafeAreaView style={screenStyles.container}>
      <FlatList
        data={ratedGameData}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        key={"grid-3"}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Image
              source={item.portrait}
              style={styles.cardImage}
            />
            <View style={styles.overlay}>
              <Ionicons name="star" size={16} color="#FFD600" />
              <Text style={styles.score}>{item.score}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 8 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181c2b',
    padding: 8,
  },
  grid: {
    gap: 12,
    paddingBottom: 24,
  },
  imageWrapper: {
    position: 'relative',
    margin: 6,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#232a3d',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(23,31,43,0.85)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  score: {
    color: '#FFD600',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 4,
  },
  cardWrapper: {
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#232a3d',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  cardImage: {
    width: widthPercentageToDP(26),
    height: heightPercentageToDP(16),
    resizeMode: 'cover',
    borderRadius: 12,
  },
});



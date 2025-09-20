import React from "react";
import { View, FlatList, Image, Text } from "react-native";
import { useRatedGames } from "@/state/RatedGamesContext";
import { useIsFocused } from '@react-navigation/native';
import { games } from "@/data/games";
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from "@/styles/globalStyles/ScreensStyle";
import { SafeAreaView } from 'react-native-safe-area-context';
import { logScreenStyles } from "@/styles/individualScreensStyle/logScreenStyle";

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
          <View style={logScreenStyles.cardWrapper}>
            <Image
              source={item.portrait}
              style={logScreenStyles.cardImage}
            />
            <View style={logScreenStyles.overlay}>
              <Ionicons name="star" size={16} color="#FFD600" />
              <Text style={logScreenStyles.score}>{item.score}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 8 }}
      />
    </SafeAreaView>
  );
}



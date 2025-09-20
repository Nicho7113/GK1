import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { HeaderBar } from "@/components/global/HeaderBar";
import CoverBackground from "@/components/gameRate/coverBackground";
import MiddleOfPage from "@/components/gameRate/middleOfPage";
import RateGameModal from "@/components/gameRate/rateGames";
import { gameScreenStyle } from "@/styles/individualScreensStyle/gameScreenStyle";
import CommentSection from "@/components/gameRate/commentSection";
import { games } from "@/data/games";
import { useRatedGames } from "@/state/RatedGamesContext";

export default function GameScreen({ navigation, route }: { navigation: any, route: any }) {
  const [modalVisible, setModalVisible] = useState(false);
  const gameId = route?.params?.gameId || 1;
  const game = games.find(g => g.id === gameId) || games[0];
  const { addRatedGame, ratedGames } = useRatedGames();

  React.useEffect(() => {
    console.log('Rated Games:', ratedGames);
  }, [ratedGames]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={gameScreenStyle.container}>
        <CoverBackground navigation={navigation} cover={game.cover} portrait={game.portrait} />
        <MiddleOfPage
          onRatePress={() => setModalVisible(true)}
          description={game.description}
          releaseDate={game.releaseDate}
          maker={game.maker}
        />
        <CommentSection comments={game.comments} />
        <RateGameModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onRate={(value) => {
            addRatedGame(game.id, value);
            setModalVisible(false);
            console.log('Rated:', game.id, value);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}


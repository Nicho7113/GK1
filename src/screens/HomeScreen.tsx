import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { GameCard } from "@/components/home/GameCard";
import { FlatList } from "react-native";
import { HeaderBar } from "@/components/global/HeaderBar";
import { homeScreenStyles } from "@/styles/individualScreensStyle/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";
import { games } from "@/data/games";


export default function HomeScreen({ navigation }: { navigation: any }) {
  const trendingGames = games.filter(g => g.category === "Trending");
  const upcomingGames = games.filter(g => g.category === "Upcoming");
  const personalizedGames = games.filter(g => g.category === "Personalized");

  const handleGamePress = (gameId: number) => {
    navigation.navigate('GameScreen', { gameId });
  };

  return (
    <View style={homeScreenStyles.container}>
      <HeaderBar />
      <ScrollView contentContainerStyle={homeScreenStyles.scrollContent}>
        <Text style={homeScreenStyles.sectionTitle}>Trending Games</Text>
        <FlatList
          data={trendingGames}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleGamePress(item.id)}>
              <GameCard title="" image={item.portrait} />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={homeScreenStyles.sectionTitle}>Upcoming Games</Text>
        <FlatList
          data={upcomingGames}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleGamePress(item.id)}>
              <GameCard title="" image={item.portrait} />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={homeScreenStyles.sectionTitle}>Personalized For You</Text>
        <FlatList
          data={personalizedGames}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleGamePress(item.id)}>
              <GameCard title="" image={item.portrait} />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}



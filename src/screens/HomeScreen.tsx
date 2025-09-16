
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { GameCard } from "@/components/home/GameCard";
import { FlatList } from "react-native";
import { HeaderBar } from "@/components/global/HeaderBar";
import { homeScreenStyles } from "@/styles/individualScreensStyle/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";

import { StackNavigationProp } from '@react-navigation/stack';


import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const trendingGames = [
    { id: 1, title: '', image: require('../../assets/home/trendingGames/expedition 33.png') },
    { id: 2, title: '', image: require('../../assets/home/trendingGames/Fortnite.jpg') },
    { id: 3, title: '', image: require('../../assets/home/trendingGames/Hollow_Knight_first_cover_art.webp') },
    { id: 4, title: '', image: require('../../assets/home/trendingGames/minecraft.png') },
    { id: 5, title: '', image: require('../../assets/home/trendingGames/peak.png') },
  ];
  const upcomingGames = [
    { id: 1, title: '', image: require('../../assets/home/upcomingGames/ArcRaiders.jpg') },
    { id: 2, title: '', image: require('../../assets/home/upcomingGames/battlefield6.jpg') },
    { id: 3, title: '', image: require('../../assets/home/upcomingGames/GhostOfYotei.jpg') },
    { id: 4, title: '', image: require('../../assets/home/upcomingGames/Silent_Hill_f_cover_art.png') },
    { id: 5, title: '', image: require('../../assets/home/upcomingGames/The_Outer_Worlds_2_cover_art.png') },
  ];
  const personalizedGames = [
    { id: 1, title: '', image: require('../../assets/home/personalized/Among_Us_cover_art.jpg') },
    { id: 2, title: '', image: require('../../assets/home/personalized/aWayOut.jpg') },
    { id: 3, title: '', image: require('../../assets/home/personalized/babaG.jpg') },
    { id: 4, title: '', image: require('../../assets/home/personalized/raftCover.jpg') },
    { id: 5, title: '', image: require('../../assets/home/personalized/subnautica.jpg') },
  ];

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
            item.image === require('../../assets/home/trendingGames/Fortnite.jpg') ? (
              <TouchableOpacity onPress={() => navigation.navigate('GameScreen' as never)}>
                <GameCard title={item.title} image={item.image} />
              </TouchableOpacity>
            ) : (
              <GameCard title={item.title} image={item.image} />
            )
          )}
          showsHorizontalScrollIndicator={false}
        />
  <Text style={homeScreenStyles.sectionTitle}>Upcoming Games</Text>
        <FlatList
          data={upcomingGames}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard title={item.title} image={item.image} />
          )}
          showsHorizontalScrollIndicator={false}
        />
  <Text style={homeScreenStyles.sectionTitle}>Personalized For You</Text>
        <FlatList
          data={personalizedGames}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard title={item.title} image={item.image} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}



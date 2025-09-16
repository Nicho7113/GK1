
import { View, Text, ScrollView } from "react-native";
import { CardRow } from "@/components/home/GameCard";
import { HeaderBar } from "@/components/global/HeaderBar";
import { screenStyles } from "@/styles/globalStyles/ScreensStyle";
import { StatusBar } from "expo-status-bar";
import { useResponsive } from "@/lib/responsive";
import { semantic } from "@/theme/semantic";
import { globalStyles } from "@/styles/globalStyles/GlobalStyle";

export default function HomeScreen() {
  const { clampFont } = useResponsive();
  return (
    <View style={[screenStyles.container, { alignItems: undefined, justifyContent: undefined }]}> 
      <HeaderBar />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 48 }}>
      <CardRow
        title="Trending Games"
        cards={[
          { title: '', image: require('../../assets/home/Fortnite.jpg') },
          { title: '', image: require('../../assets/home/minecraft.png') },
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
        ]}
      />
      <CardRow
        title="Upcoming Games"
        cards={[
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
        ]}
      />
      <CardRow
        title="Personalized For You"
        cards={[
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
          { title: '', image: require('../../assets/home/peak.png') },
        ]}
      />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}



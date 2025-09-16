import React from "react";
import { View, Text, Image, FlatList, ListRenderItemInfo } from "react-native";
import { gameCardStyles as styles } from "@/styles/individualScreensStyle/GameCardStyle";

type Card = { id: string | number; title: string; image: any };

type GameCardProps = { title: string; image: any };

export function GameCard({ title, image }: GameCardProps) {
  return (
    <View
      style={styles.card}
      onLayout={(e) => console.log('CARD layout:', e.nativeEvent.layout)}
    >
      <View style={styles.imageFrame}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

type CardRowProps = { title: string; cards: Card[] };

export function CardRow({ title, cards }: CardRowProps) {
  return (
    <View>
      <Text style={styles.rowTitle}>{title}</Text>
      <FlatList
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Card) => item.id.toString()}
        renderItem={({ item }: ListRenderItemInfo<Card>) => (
          <GameCard title={item.title} image={item.image} />
        )}
        contentContainerStyle={styles.scrollContent}
        style={{ paddingHorizontal: 0 }}
      />
    </View>
  );
}


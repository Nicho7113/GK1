import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { semantic } from "@/theme/semantic";
import { primitives } from "@/theme/primitives";

type Card = { title: string; image: any };

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
    <View
     // style={[styles.rowContainer, { backgroundColor: 'red' }]}
     // onLayout={(e) => console.log('ROW container layout:', e.nativeEvent.layout)}
    >
      <Text style={styles.rowTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
       // contentContainerStyle={[styles.scrollContent, { backgroundColor: 'red' }]}
        contentInsetAdjustmentBehavior="never"
        style={{ paddingHorizontal: 0 }}
        onLayout={(e) => console.log('SCROLL layout:', e.nativeEvent.layout)}
      >
        {cards.map((card, idx) => (
          <GameCard key={idx} title={card.title} image={card.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    width: '100%',
    alignSelf: 'stretch',
    paddingTop: wp(1.2),
  },
  rowTitle: {
    color: semantic.color.text,
    fontSize: primitives.font.md, 
    fontWeight: '800',
    marginLeft: primitives.space.sm,
    marginBottom: wp(0.8),
    marginTop: wp(1.5),
    letterSpacing: 0.04,
  },
  scrollContent: {
    alignItems: 'flex-end',
    paddingLeft: 0,
    paddingRight: 0,
  },
  card: {
    width: wp(27), // slightly smaller card width to fit more and reduce perceived gap
    aspectRatio: 0.68,
    backgroundColor: semantic.color.bg,
    borderRadius: wp(3.2),
    marginBottom: wp(0.7),
    marginHorizontal: wp(0.6),
    marginTop: wp(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: wp(3),
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  imageFrame: {
    width: '100%',
    height: '70%',
  backgroundColor: '#181818', // Netflix-like dark for image frame
    borderTopLeftRadius: wp(2.5),
    borderTopRightRadius: wp(2.5),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0, // removed inner padding so images are tight to frame
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: wp(1.5),
    overflow: 'hidden',
  },
  title: {
    color: semantic.color.text,
    fontSize: primitives.font.sm, // smaller for card title
    fontWeight: '600',
    marginTop: primitives.space.xs,
    textAlign: 'center',
    letterSpacing: 0.05,
  },
});

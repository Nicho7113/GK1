import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function CoverBackground() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/home/trendingGames/Fortnite.jpg")}
        style={styles.cover}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  cover: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
});

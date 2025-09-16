import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//SafeAreaDebug komponenten viser vores safe area i appen og 
//Kan bruges til at debugge layout issues relateret til safe areas på forskellige enheder.
export default function SafeAreaDebug() {
  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get("window");
  return (
    <>
      {/*Rød hvis der er area overlay */}
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: "rgba(255,0,0,0.12)",
            zIndex: 999,
            pointerEvents: "none",
          },
        ]}
        pointerEvents="none"
      />
      {/* Vores safe area box grøn del af siden */}
      <View
        style={{
          position: "absolute",
          top: insets.top,
          left: insets.left,
          width: width - insets.left - insets.right,
          height: height - insets.top - insets.bottom,
          borderWidth: 2,
          borderColor: "#00cc44",
          backgroundColor: "rgba(0,255,0,0.07)",
          zIndex: 1000,
          pointerEvents: "none",
        }}
        pointerEvents="none"
      />
    </>
  );
}

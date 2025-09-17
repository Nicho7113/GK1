import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type BackArrowProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function BackArrow({ onPress, style }: BackArrowProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        pressed && { backgroundColor: 'rgba(179,199,230,0.18)', transform: [{ scale: 0.92 }] }
      ]}
      onPress={onPress}
    >
      <Ionicons name="arrow-back" size={28} color="#b3c7e6" />
    </Pressable>
  );
}
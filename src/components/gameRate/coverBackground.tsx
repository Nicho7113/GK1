import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { coverBackgroundStyles } from "@/styles/componentsStyle/CoverBackgroundStyle";
import { Ionicons } from '@expo/vector-icons';
import BackArrow from '@/components/global/backArrow';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { size } from "react-native-responsive-sizes";

interface CoverBackgroundProps {
  navigation?: any;
  cover: any;
  portrait: any;
}

export default function CoverBackground({ navigation, cover, portrait }: CoverBackgroundProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[coverBackgroundStyles.container, { top: insets.top }]}> 
      <Image
        source={cover}
        style={coverBackgroundStyles.coverBg}
      />
      <View style={coverBackgroundStyles.overlay} />
      <BackArrow onPress={() => navigation?.goBack()} style={coverBackgroundStyles.backArrow} />
      <View style={coverBackgroundStyles.portraitContainer}>
        <Image
          source={portrait}
          style={coverBackgroundStyles.portrait}
        />
      </View>
    </View>
  );
}


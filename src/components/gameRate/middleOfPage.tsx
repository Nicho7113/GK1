import { semantic } from "@/theme/semantic";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { middleOfPageStyles } from "@/styles/componentsStyle/MiddleOfPageStyle";

interface MiddleOfPageProps {
  onRatePress?: () => void;
  description: string;
  releaseDate: string;
  maker: string;
}

export default function MiddleOfPage({ onRatePress, description, releaseDate, maker }: MiddleOfPageProps) {
  return (
    <View style={middleOfPageStyles.middleSection}>
      <View style={middleOfPageStyles.rateButtonWrapper}>
        <TouchableOpacity style={middleOfPageStyles.rateButton} activeOpacity={0.85} onPress={onRatePress}>
          <Text style={middleOfPageStyles.rateButtonText}>Rate Game</Text>
        </TouchableOpacity>
      </View>
      <View style={middleOfPageStyles.descriptionWrapper}>
        <Text style={middleOfPageStyles.description} numberOfLines={4}>
          {description}
        </Text>
      </View>
      <View style={middleOfPageStyles.infoWrapper}>
        <Text style={middleOfPageStyles.infoText}>Release Date: {releaseDate}</Text>
        <Text style={middleOfPageStyles.infoText}>Maker: {maker}</Text>
      </View>
    </View>
  );
}

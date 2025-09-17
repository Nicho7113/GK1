import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { headerBarStyles } from "../../styles/componentsStyle/HeaderBarStyle";
import { Image } from "react-native";

export function HeaderBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        headerBarStyles.headerBar,
        { paddingTop: insets.top }
      ]}
    >
      <View style={headerBarStyles.leftGroup}>
        <View style={headerBarStyles.logoOuter}>
          <Image source={require('../../../assets/logo/Logo.png')} style={headerBarStyles.logoImage} resizeMode="contain" />
        </View>
        <Text style={headerBarStyles.appName}>Diffd</Text>
      </View>

  </View>
  );
}

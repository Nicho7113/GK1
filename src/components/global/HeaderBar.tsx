import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useResponsive } from "@/lib/responsive";
import { semantic } from "@/theme/semantic";
import { headerBarStyles } from "../../styles/componentsStyle/HeaderBarStyle";
import { size, width } from "react-native-responsive-sizes";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Image } from "react-native";

export function HeaderBar() {
  const insets = useSafeAreaInsets();
  const { isTablet } = useResponsive();
  const logoSize = wp(12); // Responsive width for logo (about 12% of screen width)
  return (
    <View
      style={[
        headerBarStyles.headerBar,
        { paddingTop: insets.top }
      ]}
    >
      {/* Left: Logo and App Name grouped */}
      <View style={headerBarStyles.leftGroup}>
        <View style={headerBarStyles.logoOuter}>
          <Image source={require('../../../assets/logo/Logo.png')} style={headerBarStyles.logoImage} resizeMode="contain" />
        </View>
        <Text style={headerBarStyles.appName}>GameShelf</Text>
      </View>
      {/* Right: Login Button */}
      <TouchableOpacity style={headerBarStyles.loginButton} activeOpacity={0.85}>
        <Text style={headerBarStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
  </View>
  );
}

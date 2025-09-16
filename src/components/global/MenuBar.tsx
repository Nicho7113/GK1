// src/components/MenuBar.tsx
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useResponsive } from "@/lib/responsive";
import { width, size } from "react-native-responsive-sizes";
import { semantic } from "@/theme/semantic";
import { menuBarStyles } from "@/styles/componentsStyle/MenuBarStyle";

type Props = {
  onHome?: () => void;
  onSearch?: () => void;
  onApps?: () => void;
  onSettings?: () => void;
  activeScreen: "home" | "search" | "apps" | "settings";
};


export default function MenuBar({
  onHome, onSearch, onApps, onSettings, activeScreen,
}: Props) {
  const insets = useSafeAreaInsets();

//Meget af koden i resposnive.ts er ikke nødvendig medmindre man selv vil beregne responsive størrelser
//Var 100 gange nemmere bare at downloade react-native-responsive-sizes --> Ligger også kode i primitives og semantic som ikke vil bruges rigtigt
const {
    iconNav, vPad, hPad, isTablet, minTouch
  } = useResponsive();
  // Clamp icon size og Vpad for enheder der er tablet eller desktopish eller phone
  const menuBarIcon = isTablet ? Math.max(iconNav, semantic.icon.navTabletCap) : Math.min(iconNav, size(28));
  // Vertical padding
  const menuBarVPad = isTablet ? Math.max(vPad, size(18)) : Math.min(vPad * 0.8, size(7));
  const menuBarHPad = hPad;
  const barHeight = Math.round(menuBarIcon + menuBarVPad * 2 + insets.bottom);


  return (
    <View style={[
      menuBarStyles.menuBar,
  menuBarStyles.menuBarPolished,
      {
        height: barHeight,
        paddingBottom: insets.bottom,
        paddingHorizontal: menuBarHPad,
        left: 0,
        right: 0,
        width: undefined, 
        alignSelf: undefined,
      },
    ]}>
  <Item icon={<Ionicons name="home" size={menuBarIcon} color={activeScreen === "home" ? semantic.color.text : '#aaa'} />} onPress={activeScreen !== "home" ? onHome : undefined} minTouch={minTouch} active={activeScreen === "home"} />
  <Item icon={<Feather name="search" size={menuBarIcon} color={activeScreen === "search" ? semantic.color.text : '#aaa'} />} onPress={activeScreen !== "search" ? onSearch : undefined} minTouch={minTouch} active={activeScreen === "search"} />
  <Item icon={<MaterialIcons name="apps" size={menuBarIcon} color={activeScreen === "apps" ? semantic.color.text : '#aaa'} />} onPress={activeScreen !== "apps" ? onApps : undefined} minTouch={minTouch} active={activeScreen === "apps"} />
  <Item icon={<Ionicons name="person-circle" size={menuBarIcon} color={activeScreen === "settings" ? semantic.color.text : '#aaa'} />} onPress={activeScreen !== "settings" ? onSettings : undefined} minTouch={minTouch} active={activeScreen === "settings"} />
    </View>
  );
}
// Lille animation ved tryk på knapperne i menu bar
function Item({
  icon, onPress, minTouch, active
}: {
  icon: React.ReactNode;
  onPress?: () => void;
  minTouch?: number;
  active?: boolean;
}) {
  return (
    <TouchableOpacity
   
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      activeOpacity={0.85}
    >
      <View style={{ marginTop: size(2) }}>{icon}</View>
    </TouchableOpacity>
  );
}





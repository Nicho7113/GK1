import React from "react";
import MenuBar from "@/components/global/MenuBar";
import { useNavigation } from '@react-navigation/native';

export default function MenuBarWithNavigation({ activeScreen }: { activeScreen: "home" | "search" | "apps" | "settings" }) {
  const navigation = useNavigation();
  return (
    <MenuBar
      activeScreen={activeScreen}
  // @ts-ignore
  onHome={() => navigation.navigate('Main', { screen: 'Home' })}
  // @ts-ignore
  onSearch={() => navigation.navigate('Main', { screen: 'Search' })}
  // @ts-ignore
  onApps={() => navigation.navigate('Main', { screen: 'Log' })}
  // @ts-ignore
  onSettings={() => navigation.navigate('Main', { screen: 'Profile' })}
    />
  );
}

import React from "react";
import { useActiveTabFromRoute } from "../navigation/useActiveTabFromRoute";
import { View } from "react-native";
import { HeaderBar } from "@/components/global/HeaderBar";
import MenuBarWithNavigation from "@/components/global/MenuBarWithNavigation";
import CoverBackground from "@/components/gameRate/coverBackground";
import { screenStyles } from "@/styles/globalStyles/ScreensStyle";

export default function GameScreen() {
	const activeScreen = useActiveTabFromRoute();
	return (
		<View style={screenStyles.container}>
			<HeaderBar />
			<CoverBackground />
			<MenuBarWithNavigation activeScreen={activeScreen} />
		</View>
	);
}

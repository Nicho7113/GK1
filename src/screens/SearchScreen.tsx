import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { screenStyles } from "@/styles/globalStyles/ScreensStyle";
import { globalStyles } from "@/styles/globalStyles/GlobalStyle";
import { semantic } from "@/theme/semantic";

export default function SearchScreen() {
		return (
			<View style={screenStyles.container}>
				<Text style={{ color: semantic.color.text, fontSize: semantic.font.body }}>Search Screen</Text>
		</View>
	);
}



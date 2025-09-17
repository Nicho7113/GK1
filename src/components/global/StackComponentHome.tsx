
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '@/screens/StackScreens/GameScreen';
import HomeScreen from '@/screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackComponent() {
		return (
			<Stack.Navigator initialRouteName="HomeScreen">
				<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
				<Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		);
}

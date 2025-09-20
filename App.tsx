import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { RatedGamesProvider } from "@/state/RatedGamesContext";

export default function App() {
  return (
    <RatedGamesProvider>
      <AppNavigator />
    </RatedGamesProvider>
  );
}

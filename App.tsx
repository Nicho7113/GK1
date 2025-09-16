import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import LogScreen from './src/screens/LogScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MenuBar from './src/components/global/MenuBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ navigation, state }) => {
        // Map tab index til activeScreen prop
        const tabNameToActiveScreen = {
          Home: "home",
          Search: "search",
          Log: "apps",
          Profile: "settings",
        } as const;
        const tabRoute = state.routes[state.index].name as keyof typeof tabNameToActiveScreen;
        const activeScreen = tabNameToActiveScreen[tabRoute] || "home";

        return (
          <MenuBar
            activeScreen={activeScreen}
            onHome={() => navigation.navigate("Home")}
            onSearch={() => navigation.navigate("Search")}
            onApps={() => navigation.navigate("Log")}
            onSettings={() => navigation.navigate("Profile")}
          />
        );
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Log" component={LogScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          {/* Eksempel: <Stack.Screen name="Game" component={GameScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

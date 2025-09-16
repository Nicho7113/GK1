import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LogScreen from '../screens/LogScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuBar from '../components/global/MenuBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ navigation, state }) => {
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


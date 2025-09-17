import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LogScreen from '../screens/LogScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StackComponent from '@/components/global/StackComponentHome';
import { TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();


type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
  name: string;
};

function TabIcon({ focused, color, size, name }: TabIconProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={{ alignItems: 'center', justifyContent: 'center' }}
 
      disabled
    >
      <View style={{ marginBottom: -2 }}>
        <Ionicons name={name as any} size={size} color={focused ? '#fff' : '#aaa'} />
      </View>
    </TouchableOpacity>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'home';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'Log') iconName = 'apps';
          else if (route.name === 'Profile') iconName = 'person-circle';
          return (
            <TabIcon
              name={iconName}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: '#222',
          borderTopWidth: 0,
          height: heightPercentageToDP(8),
        },
      })}
    >
      <Tab.Screen name="Home" component={StackComponent} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Log" component={LogScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}




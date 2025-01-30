import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FavoritesStack, HomeStack, SearchStack } from './stacks';
import Icon from 'react-native-vector-icons/FontAwesome';

//create navigator
const Tab = createBottomTabNavigator();
const ScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#FF0000',
  tabBarInactiveTintColor: '#808080',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={ScreenOptions}
    >
      <Tab.Screen
        name='Search'
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='search'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='home'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='heart'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import {
  HomeScreen,
  FavoritesScreen,
  PokemonDetailsScreen,
  SearchScreen,
} from '../screens';

//create navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//bottom tabs for home, search, favorites

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Search'
      component={SearchScreen}
    />
    <Tab.Screen
      name='Home'
      component={HomeScreen}
    />
    <Tab.Screen
      name='Favorites'
      component={FavoritesScreen}
    />
  </Tab.Navigator>
);

//stack navigator for pokemon details
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Main'
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='PokemonDetails'
      component={PokemonDetailsScreen}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Home'
          component={StackNavigator}
        />
        <Drawer.Screen
          name='Favorites'
          component={FavoritesScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

//consider moving stack and bottom tab navigator to own files later

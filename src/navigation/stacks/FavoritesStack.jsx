import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FavoritesScreen, PokemonDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
      />
      <Stack.Screen
        name='PokemonDetails'
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;

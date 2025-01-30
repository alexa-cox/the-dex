import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PokemonDetailsScreen, SearchScreen } from '../../screens';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='SearchScreen'
        component={SearchScreen}
      />
      <Stack.Screen
        name='PokemonDetails'
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;

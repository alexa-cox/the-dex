import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen, PokemonDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <Stack.Screen
        name='PokemonDetails'
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

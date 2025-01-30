import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen, PokemonDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Pokemon'
        component={PokemonDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

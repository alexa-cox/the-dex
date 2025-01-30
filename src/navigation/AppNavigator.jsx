import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { CustomHeader } from '../components';
import { FavoritesScreen } from '../screens';
import TabNavigator from './TabNavigator';

//create navigator
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            header: () => <CustomHeader title={route.name} />,
          })}
        >
          <Drawer.Screen
            name='Home'
            component={TabNavigator}
          />
          <Drawer.Screen
            name='Favorites'
            component={FavoritesScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;

//consider moving stack and bottom tab navigator to own files later

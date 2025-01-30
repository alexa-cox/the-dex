import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { headerStyles } from '../styles';

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const getHeaderTitle = () => {
    switch (route.name) {
      case 'Home':
        return 'Home';
      case 'Favorites':
        return 'Favorites';
      case 'Profile':
        return 'Profile';
      default:
        return route.name;
    }
  };

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon
          name='menu'
          size={28}
          color='#000'
        />
      </TouchableOpacity>
      <Text style={headerStyles.title}>{getHeaderTitle()}</Text>
    </View>
  );
};

export default CustomHeader;

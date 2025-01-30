import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { headerStyles } from '../styles';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon
          name='menu'
          size={28}
          color='#000'
        />
      </TouchableOpacity>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

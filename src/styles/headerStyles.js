import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: Platform.OS === 'ios' ? 50 : 55,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});

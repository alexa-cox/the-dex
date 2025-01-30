import { StyleSheet } from 'react-native';

export const pokemonCardStyles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

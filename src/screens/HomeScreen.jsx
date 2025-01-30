import React, { useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from '../components';
import { getPokemonList } from '../redux';
import { homeStyles } from '../styles';
import { clearAllStorage } from '../utils/clearStorage';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { pokemonList, isLoading, hasMore, currentPage } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    console.log('Current Pokemon List:', pokemonList);
    loadInitialPokemon();
  }, []);

  const loadInitialPokemon = () => {
    if (pokemonList.length === 0) {
      console.log('Dispatching initial pokemon load');
      dispatch(getPokemonList(0));
    }
  };

  const loadMorePokemon = () => {
    if (!isLoading && hasMore) {
      console.log('Loading more pokemon, page:', currentPage);
      dispatch(getPokemonList(currentPage));
    }
  };

  const renderLoadingFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={homeStyles.loaderContainer}>
        <ActivityIndicator size='large' />
      </View>
    );
  };

  const renderPokemonCard = ({ item }) => {
    return <PokemonCard pokemon={item} />;
  };

  const handleClearStorage = async () => {
    await clearAllStorage();
  };

  return (
    <View style={homeStyles.container}>
      <Button
        title='Clear Storage'
        onPress={handleClearStorage}
      />
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonCard}
        keyExtractor={(item) => item.name}
        onEndReached={loadMorePokemon}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderLoadingFooter}
        numColumns={2}
        contentContainerStyle={homeStyles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;

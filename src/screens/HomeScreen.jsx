import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from '../components';
import { getPokemonList } from '../redux';
import { homeStyles } from '../styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { pokemonList, isLoading, hasMore, currentPage } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    loadInitialPokemon();
  }, []);

  const loadInitialPokemon = () => {
    if (pokemonList.length === 0) {
      dispatch(getPokemonList(0));
    }
  };

  const loadMorePokemon = () => {
    if (!isLoading && hasMore) {
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

  const renderPokemonCard = ({ item }) => <PokemonCard pokemon={item} />;

  return (
    <View style={homeStyles.container}>
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

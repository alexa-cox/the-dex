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
    console.log('Current Pokemon List:', pokemonList);
    loadInitialPokemon();
  }, []);

  const loadInitialPokemon = () => {
    if (pokemonList.length === 0) {
      console.log('Dispatching initial pokemon load');
      dispatch(getPokemonList(0));
    }
  };

  // const loadMorePokemon = () => {
  //   if (!isLoading && hasMore) {
  //     dispatch(getPokemonList(currentPage));
  //   }
  // };

  const renderLoadingFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={homeStyles.loaderContainer}>
        <ActivityIndicator size='large' />
      </View>
    );
  };

  const renderPokemonCard = ({ item }) => {
    console.log('Item in renderPokemonCard:', item);
    return <PokemonCard pokemonNameOrId={item.name} />;
  };

  return (
    <View style={homeStyles.container}>
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonCard}
        keyExtractor={(item) => item.name}
        onEndReached={null}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderLoadingFooter}
        numColumns={2}
        contentContainerStyle={homeStyles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;

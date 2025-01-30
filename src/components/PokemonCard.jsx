import React, { useEffect } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../redux';
import TypeBadge from './TypeBadge';
import { pokemonCardStyles } from '../styles';

const PokemonCard = ({ pokemonNameOrId }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(
    (state) => state.pokemon.pokemonData[pokemonNameOrId]
  );

  useEffect(() => {
    console.log('Fetching pokemon data for:', pokemonNameOrId);
    dispatch(getPokemon(pokemonNameOrId));
  }, [dispatch, pokemonNameOrId]);

  if (!pokemon) {
    return (
      <View style={pokemonCardStyles.card}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <TouchableOpacity style={pokemonCardStyles.card}>
      <View>
        {pokemon.sprites?.front_default && (
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={pokemonCardStyles.image}
          />
        )}
        <Text style={pokemonCardStyles.name}>{pokemon.name}</Text>
        <View style={pokemonCardStyles.typeContainer}>
          {pokemon.types?.map((type) => (
            <TypeBadge
              key={type.slot}
              type={type.type.name}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

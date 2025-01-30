import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { pokemonCardStyles } from '../styles';
import TypeBadge from './TypeBadge';

const PokemonCard = ({ pokemon }) => {
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

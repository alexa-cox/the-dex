import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  BASE_API_URL,
  CACHE_EXPIRATION_HOURS,
  POKEMON_PER_PAGE,
} from './apiConfig';

export const fetchPokemonList = async (page = 0) => {
  try {
    const offset = page * POKEMON_PER_PAGE;
    const cacheKey = `pokemon_list_${page}`;

    //check cache
    const cachedData = await AsyncStorage.getItem(cacheKey);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRATION_HOURS * 60 * 60 * 1000) {
        return data;
      }
      await AsyncStorage.removeItem(cacheKey);
    }

    //fetch from API
    const response = await axios.get(
      `${BASE_API_URL}pokemon?limit=${POKEMON_PER_PAGE}&offset=${offset}`
    );

    //cache the results
    const cacheEntry = {
      timestamp: Date.now(),
      data: response.data,
    };
    await AsyncStorage.setItem(cacheKey, JSON.stringify(cacheEntry));

    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemon = async (pokemonNameOrId) => {
  try {
    //check asyncstorage for cached data
    const cachedData = await AsyncStorage.getItem(`pokemon_${pokemonNameOrId}`);

    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      const now = Date.now();

      //if cache is still valid, return it
      if (now - timestamp < CACHE_EXPIRATION_HOURS * 60 * 60 * 1000) {
        console.log(`Cache hit for ${pokemonNameOrId}`);
        return data;
      }

      //if expired, remove cache
      await AsyncStorage.removeItem(`pokemon_${pokemonNameOrId}`);
    }

    //fetch from API if not cached
    const response = await axios.get(
      `${BASE_API_URL}pokemon/${pokemonNameOrId}`
    );

    //store data in asyncstorage
    const cacheEntry = {
      timestamp: Date.now(),
      data: response.data,
    };

    await AsyncStorage.setItem(
      `pokemon_${pokemonNameOrId}`,
      JSON.stringify(cacheEntry)
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};

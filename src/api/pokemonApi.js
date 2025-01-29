import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_API_URL, CACHE_EXPIRATION_HOURS } from './apiConfig';

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

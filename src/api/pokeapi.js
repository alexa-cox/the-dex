import axios from 'axios';
import { BASE_API_URL } from './apiConfig';

const cache = new Map(); //in-memory cache

export const fetchPokemon = async (pokemonNameorId) => {
  if (cache.has(pokemonNameorId)) {
    console.log(`Cache hit for ${pokemonNameorId}`);
    return cache.get(pokemonNameorId); //return cached data
  }

  try {
    const response = await axios.get(
      `${BASE_API_URL}pokemon/${pokemonNameorId}`
    );
    cache.set(pokemonNameorId, response.data); // store in cache
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};

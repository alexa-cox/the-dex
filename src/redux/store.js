import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from '.';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;

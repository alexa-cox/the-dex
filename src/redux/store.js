import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    favorites: favoritesReducer,
  },
});

export default store;

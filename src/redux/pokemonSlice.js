import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  isLoading: false,
  errMess: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
});

export const {} = pokemonSlice.actions;
export default pokemonSlice.reducer;

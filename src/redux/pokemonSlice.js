import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemon } from '../api';

const initialState = {
  pokemons: [],
  isLoading: false,
  errMess: null,
};

export const getPokemon = createAsyncThunk(
  'pokemon/getPokemon',
  async (pokemonNameorId, { rejectWithValue }) => {
    try {
      return await fetchPokemon(pokemonNameorId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.isLoading = true;
        state.errMess = null;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.pokemonData[action.meta.arg] = action.payload);
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.errMess = action.payload;
      });
  },
});

export default pokemonSlice.reducer;

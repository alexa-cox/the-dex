import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemon, fetchPokemonList } from '../api';

const initialState = {
  pokemonList: [],
  pokemonData: [],
  currentPage: 0,
  hasMore: true,
  isLoading: false,
  errMess: null,
};

export const getPokemonList = createAsyncThunk(
  'pokemon/getPokemonList',
  async (page, { rejectWithValue }) => {
    try {
      return await fetchPokemonList(page);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
        state.isLoading = false;
        state.pokemonData[action.meta.arg] = action.payload;
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.errMess = action.payload;
      })
      .addCase(getPokemonList.pending, (state) => {
        state.isLoading = true;
        state.errMess = null;
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentPage += 1;
        state.pokemonList = [...state.pokemonList, ...action.payload.results];
        state.hasMore = action.payload.next !== null;
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        state.isLoading = false;
        state.errMess = action.payload;
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;

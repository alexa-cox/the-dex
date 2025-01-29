import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
});

export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer;

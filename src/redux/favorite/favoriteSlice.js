import { createSlice } from '@reduxjs/toolkit';
import {
  addCarToFavorites,
  getCarDetails,
  removeCarFromFavorites,
} from './favoriteOperation';

const initialState = {
  isLoading: false,
  carList: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCarDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getCarDetails.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addCarToFavorites, (state, { payload }) => {
        state.carList.push(payload);
      })
      .addCase(removeCarFromFavorites, (state, { payload }) => {
        state.carList = state.carList.filter(car => car.id !== payload);
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getCar } from './carsOperation';

const initialState = {
  cars: [],
  isLoading: false,
};

export const carSlice = createSlice({
  name: 'car',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCar.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCar.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.isLoading = false;
      })
      .addCase(getCar.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const carReducer = carSlice.reducer;

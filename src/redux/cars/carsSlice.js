import { createSlice } from '@reduxjs/toolkit';
import { getCar, getAllCars, resetCarStore } from './carsOperation';

const initialState = {
  cars: [],
  isLoading: false,
};

export const carSlice = createSlice({
  name: 'cars',
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
      })
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
      .addCase(getAllCars.rejected, state => {
        state.isLoading = false;
      })
      .addCase(resetCarStore, state => {
        state.cars = [];
      });
  },
});

export const carReducer = carSlice.reducer;

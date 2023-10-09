import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { fetchCars, fetchAllCars } from 'utils/mockapi';

export const getCar = createAsyncThunk(
  'car/getCar',
  async (page = 1, thunkApi) => {
    try {
      const response = await fetchCars(page);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'car/getAllCars',
  async (_, thunkApi) => {
    try {
      const res = await fetchAllCars();
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const resetCarStore = createAction('car/resetCar');

import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getCar } from 'utils/mockapi';

export const getCarDetails = createAsyncThunk(
  'favorites/getCar',
  async (carsId, thunkApi) => {
    try {
      const response = await Promise.all(carsId.map(id => getCar(id)));
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCarToFavorites = createAction('favorites/addCar', car => ({
  payload: car,
}));

export const removeCarFromFavorites = createAction('favorites/remove', id => ({
  payload: id,
}));

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from 'utils/mockapi';

const getCar = createAsyncThunk('car/getCar', async (page = 1, thunkApi) => {
  try {
    const response = await fetchCars(page);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export default getCar;

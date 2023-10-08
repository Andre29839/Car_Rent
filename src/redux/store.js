import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carReducer } from './cars/carsSlice';
import { favoritesReducer } from './favorite/favoriteSlice';

const favoriteConfig = {
  key: 'favotite',
  storage,
  whitelist: ['carsList'],
};

export const store = configureStore({
  reducer: {
    cars: carReducer,
    favorites: persistReducer(favoriteConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE],
      },
    }),
});

export const persistedStore = persistStore(store);

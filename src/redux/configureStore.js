import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  reducers: {
    countries: countriesReducer,
  },
});

const store = configureStore({
  reducer,
});

export default store;

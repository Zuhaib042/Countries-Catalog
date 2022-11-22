import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// actions
// const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

// initial state
const initialState = [];

// base url

const baseUrl = 'https://restcountries.com/v3.1/all';

// createAsyncThunk

// Reducers

// const countriesReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case `${FETCH_COUNTRIES}/fulfilled`: {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// };

// action creators

export const fetchCountries = createAsyncThunk('fetchCountries', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
  //   const countries = response.data;
  //   const res = countries.map((elem) => ({
  //     countryId: nanoid(),
  //     countryName: elem.name.common,
  //     region: elem.region,
  //     lat: elem.latlng[0],
  //     long: elem.latlng[1],
  //     area: elem.area,
  //     population: elem.population,
  //     flag: elem.flags.png,
  //   }));
  //   return res;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      const countries = action.payload.map((elem) => ({
        countryId: nanoid(),
        countryName: elem.name.common,
        region: elem.region,
        lat: elem.latlng[0],
        long: elem.latlng[1],
        area: elem.area,
        population: elem.population,
        flag: elem.flags.png,
      }));
      return countries;
    },
  },
});

// export const selectAllCountries = (state) => state.countries;
// export const { fetchData } = countriesSlice.actions;
export default countriesSlice.reducer;
// export default countriesReducer;

// fetch function outside of createAsyncThunk

// const fetchDataFromApi = async () => {
//   const response = await axios.get(baseUrl);
//   const countries = response.data;
//   const res = countries.map((elem) => ({
//     countryId: nanoid(),
//     countryName: elem.name.common,
//     // capital: elem.capital[0],
//     region: elem.region,
//     // language: elem.language,
//     lat: elem.latlng[0],
//     long: elem.latlng[1],
//     area: elem.area,
//     population: elem.population,
//     flag: elem.flags.png,
//   }));
//   return res;
// };
// fetchDataFromApi();

import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import getCountriesData from './api';

// initial state
const initialState = [];

// base url
export const baseUrl = 'https://restcountries.com/v3.1/all';

// createAsyncThunk
export const fetchCountries = createAsyncThunk(
  'fetchcountries/getData',
  async () => {
    const countries = await getCountriesData();
    const res = countries.map((elem) => ({
      countryId: nanoid(),
      countryName: elem.name.common,
      region: elem.region,
      lat: elem.latlng[0],
      long: elem.latlng[1],
      continents: elem.continents,
      carSide: elem.car.side,
      coatOfArms: elem.coatOfArms.png,
      capital: elem.capital,
      capitalLocation: elem.capitalInfo.latlng,
      langugage: elem.languages,
      subregion: elem.subregion,
      currency: elem.currencies,
      timezones: elem.timezones,
      area: elem.area,
      flagSmall: elem.flag,
      population: elem.population,
      flag: elem.flags.png,
    }));
    return res;
  },
);

// createSlice
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountries.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export const selectAllCountries = (state) => state.countries;
export default countriesSlice.reducer;

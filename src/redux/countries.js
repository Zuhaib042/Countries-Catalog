import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// actions
const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

// initial state
const initialState = [];

// base url

const baseUrl = 'https://restcountries.com/v3.1/all'

// createAsyncThunk
const fetchCountries = createAsyncThunk(FETCH_COUNTRIES, async()=>{
    
})

const countriesSlice = createSlice({
    name: 'countries'
    initialState,

})
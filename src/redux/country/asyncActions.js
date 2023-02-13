import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'country/fetchCountriesStatus',
  async (params) => {
    const { search } = params;
    const { data } = await axios.get(
      search ? `https://restcountries.com/v3.1/name/${search}` : `https://restcountries.com/v3.1/all`,
    );

    return data;
  },
);
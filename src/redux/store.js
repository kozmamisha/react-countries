import { configureStore } from '@reduxjs/toolkit';

import country from './country/slice'
import filter from './filters/slice'

export const store = configureStore({
  reducer: {
    country,
    filter,
  },
});

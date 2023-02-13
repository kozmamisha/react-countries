import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import search from './search/slice';

export const store = configureStore({
  reducer: {

  },
});

export const useAppDispatch = () => useDispatch();

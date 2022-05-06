import { configureStore } from '@reduxjs/toolkit';
import appReducers from '../features/AppSlice';

export const store = configureStore({
  reducer: {
    counter: appReducers
  },
});

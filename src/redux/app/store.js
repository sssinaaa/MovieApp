import {configureStore} from '@reduxjs/toolkit';
import {movieApiSlice} from '../features/movieApiSlice';

export const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(movieApiSlice.middleware);
  },
});

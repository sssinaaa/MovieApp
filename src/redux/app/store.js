import {configureStore} from '@reduxjs/toolkit';
import {movieApiSlice} from '../features/movieApiSlice';
import {seriesApiSlice} from '../features/seriesApiSlice';

export const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
    [seriesApiSlice.reducerPath]: seriesApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      movieApiSlice.middleware,
      seriesApiSlice.middleware,
    );
  },
});

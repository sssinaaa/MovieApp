import {configureStore} from '@reduxjs/toolkit';
import {genreApiSlice} from '../features/genreApiSlice';
import {movieApiSlice} from '../features/movieApiSlice';
import {seriesApiSlice} from '../features/seriesApiSlice';

export const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
    [seriesApiSlice.reducerPath]: seriesApiSlice.reducer,
    [genreApiSlice.reducerPath]: genreApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      movieApiSlice.middleware,
      seriesApiSlice.middleware,
      genreApiSlice.middleware,
    );
  },
});

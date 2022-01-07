import {configureStore} from '@reduxjs/toolkit';
import {genreApiSlice} from '../features/genreApiSlice';
import {movieApiSlice} from '../features/movieApiSlice';
import {seriesApiSlice} from '../features/seriesApiSlice';
import {searchApiSlice} from '../features/searchApiSlice';
import {newsApiSlice} from '../features/newsApiSlice';

export const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
    [seriesApiSlice.reducerPath]: seriesApiSlice.reducer,
    [genreApiSlice.reducerPath]: genreApiSlice.reducer,
    [searchApiSlice.reducerPath]: searchApiSlice.reducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      movieApiSlice.middleware,
      seriesApiSlice.middleware,
      genreApiSlice.middleware,
      newsApiSlice.middleware,
      searchApiSlice.middleware,
    );
  },
});

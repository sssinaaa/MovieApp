import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const genreApiSlice = createApi({
  reducerPath: 'genreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: builder => ({
    fetchMovieGenre: builder.query({
      query: () => `/genre/movie/list?api_key=${API_KEY}`,
    }),
    fetchSeriesGenre: builder.query({
      query: () => `/genre/tv/list?api_key=${API_KEY}`,
    }),
  }),
});

export const {useFetchMovieGenreQuery, useFetchSeriesGenreQuery} =
  genreApiSlice;

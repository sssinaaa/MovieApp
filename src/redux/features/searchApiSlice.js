import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const searchApiSlice = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: builder => ({
    fetchSearchPerson: builder.query({
      query: name => `/search/person?query=${name}?&api_key=${API_KEY}`,
    }),
    fetchSearchMovies: builder.query({
      query: movie => `/search/movie?query=${movie}?&api_key=${API_KEY}`,
    }),
    fetchSearchSeries: builder.query({
      query: series => `/search/tv?query=${series}?&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useFetchSearchPersonQuery,
  useFetchSearchMoviesQuery,
  useFetchSearchSeriesQuery,
} = searchApiSlice;

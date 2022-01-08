import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const castApiSlice = createApi({
  reducerPath: 'castApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: builder => ({
    fetchPerson: builder.query({
      query: id => `/person/${id}?&api_key=${API_KEY}`,
    }),
    fetchPersonMovies: builder.query({
      query: id => `/person/${id}/movie_credits?&api_key=${API_KEY}`,
    }),
  }),
});

export const {useFetchPersonQuery, useFetchPersonMoviesQuery} = castApiSlice;

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const movieApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    // prepareHeaders(headers) {
    //   headers.set('api_key', API_KEY);
    //   return headers;
    // },
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query() {
          return `movie/popular?api_key=${API_KEY}`;
        },
      }),
    };
  },
});

export const {useFetchPopularMoviesQuery, useFetchMovieCreditsQuery} =
  movieApiSlice;

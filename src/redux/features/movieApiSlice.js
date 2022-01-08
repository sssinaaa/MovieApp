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
  endpoints: builder => ({
    fetchPopularMovies: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}`,
    }),
    fetchMovieCredits: builder.query({
      query: id => `movie/${id}/credits?api_key=${API_KEY}`,
    }),
    fetchDetailScreen: builder.query({
      query: id => `movie/${id}?api_key=${API_KEY}`,
    }),
    fetchUpcomingMovies: builder.query({
      query: () => `movie/upcoming?api_key=${API_KEY}`,
    }),
    fetchDiscoverMovies: builder.query({
      query: id =>
        `discover/movie?sort_by=popularity.desc&page=1&with_genres=${id}?&api_key=${API_KEY}`,
    }),
    fetchSearchMovies: builder.query({
      query: search =>
        `https://api.themoviedb.org/3/search/movie?query=${search}?&api_key=${API_KEY}`,
    }),
    fetchMoviesReviews: builder.query({
      query: id => `/movie/${id}/reviews?&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useFetchPopularMoviesQuery,
  useFetchMovieCreditsQuery,
  useFetchDetailScreenQuery,
  useFetchUpcomingMoviesQuery,
  useFetchDiscoverMoviesQuery,
  useFetchSearchMoviesQuery,
  useFetchMoviesReviewsQuery,
} = movieApiSlice;

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const seriesApiSlice = createApi({
  reducerPath: 'seriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: builder => ({
    fetchPopularSeries: builder.query({
      query: () => `tv/top_rated?api_key=${API_KEY}`,
    }),
    fetchDetailSeries: builder.query({
      query: id => `tv/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {useFetchPopularSeriesQuery, useFetchDetailSeriesQuery} =
  seriesApiSlice;

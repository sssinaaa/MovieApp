import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = 'pub_3332e98d8d4590fdc8e4caaca10abc8008c2';

export const newsApiSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsdata.io/api/1/news',
  }),
  endpoints: builder => ({
    fetchNews: builder.query({
      query: () =>
        `?apikey=${API_KEY}&language=en&q=entertainment%20AND%20movies%20`,
    }),
  }),
});

export const {useFetchNewsQuery} = newsApiSlice;

import axios from 'axios';
import {
  FETCH_POPULAR_SERIES_REQUEST,
  FETCH_POPULAR_SERIES_SUCCESS,
  FETCH_POPULAR_SERIES_FAILURE,
} from './popularSeriesTypes';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const fetchPopularSeriesRequest = () => {
  return {
    type: FETCH_POPULAR_SERIES_REQUEST,
  };
};

const fetchPopularSeriesSuccess = popularSeries => {
  return {
    type: FETCH_POPULAR_SERIES_SUCCESS,
    payload: popularSeries,
  };
};

const fetchPopularSeriesFailure = error => {
  return {
    type: FETCH_POPULAR_SERIES_FAILURE,
    payload: error,
  };
};

export const fetchPopularSeries = () => {
  return dispatch => {
    dispatch(fetchPopularSeriesRequest);
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then(response => {
        const popularSeries = response.data;
        dispatch(fetchPopularSeriesSuccess(popularSeries));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPopularSeriesFailure(errorMsg));
      });
  };
};

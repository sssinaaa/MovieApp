import axios from 'axios';
import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from './popularTypes';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const fetchPopularMoviesRequest = () => {
  return {
    type: FETCH_POPULAR_MOVIES_REQUEST,
  };
};

const fetchPopularMoviesSuccess = popularMovies => {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    payload: popularMovies,
  };
};

const fetchPopularMoviesFailure = error => {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchPopularMovies = () => {
  return dispatch => {
    dispatch(fetchPopularMoviesRequest);
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(response => {
        const popularMovies = response.data;
        dispatch(fetchPopularMoviesSuccess(popularMovies));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPopularMoviesFailure(errorMsg));
      });
  };
};

import axios from 'axios';
import {
  UPCOMING_MOVIES_REQUEST,
  UPCOMING_MOVIES_SUCCESS,
  UPCOMING_MOVIES_FAILURE,
} from './upcomingMoviesTypes';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const fetchUpcomingMoviesRequest = () => {
  return {
    type: UPCOMING_MOVIES_REQUEST,
  };
};

const upcomingMoviesSuccess = upcomingMovies => {
  return {
    type: UPCOMING_MOVIES_SUCCESS,
    payload: upcomingMovies,
  };
};

const upcomingMoviesFailure = error => {
  return {
    type: UPCOMING_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchUpcomingMovies = () => {
  return dispatch => {
    dispatch(fetchUpcomingMoviesRequest);
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key${API_KEY}`)
      .then(response => {
        const upcomingMovies = response.data;
        dispatch(upcomingMoviesSuccess(upcomingMovies));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(upcomingMoviesFailure(errorMsg));
      });
  };
};

import axios from 'axios';
import {
  MOVIE_CREDITS_REQUEST,
  MOVIE_CREDITS_SUCCESS,
  MOVIE_CREDITS_FAILURE,
} from './movieCreditsTypes';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const fetchMovieCreditsRequest = () => {
  return {
    type: MOVIE_CREDITS_REQUEST,
  };
};

const fetchMovieCreditsSuccess = movieCredits => {
  return {
    type: MOVIE_CREDITS_SUCCESS,
    payload: movieCredits,
  };
};

const fetchMovieCreditsFailure = error => {
  return {
    type: MOVIE_CREDITS_FAILURE,
    payload: error,
  };
};

export const fetchMovieCredits = () => {
  return dispatch => {
    dispatch(fetchMovieCreditsRequest);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
      )
      .then(response => {
        movieCredits = response.data;
        dispatch(fetchMovieCreditsSuccess(movieCredits));
      })
      .catch(error => {
        errorMsg = error.message;
        dispatch(fetchMovieCreditsFailure(errorMsg));
      });
  };
};

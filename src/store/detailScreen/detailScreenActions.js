import axios from 'axios';
import {
  DETAIL_SCREEN_REQUEST,
  DETAIL_SCREEN_SUCCESS,
  DETAIL_SCREEN_FAILURE,
} from './detailScreenTypes';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';

export const fetchDetailScreenRequest = () => {
  return {
    type: DETAIL_SCREEN_REQUEST,
  };
};

const fetchDetailScreenSuccess = detail => {
  return {
    type: DETAIL_SCREEN_SUCCESS,
    payload: detail,
  };
};

const fetchDetailScreenFailure = error => {
  return {
    type: DETAIL_SCREEN_FAILURE,
    payload: error,
  };
};

export const fetchDetailScreen = id => {
  return dispatch => {
    dispatch(fetchDetailScreenRequest);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => {
        const detail = response.data;
        dispatch(fetchDetailScreenSuccess(detail));
      })
      .catch(error => {
        const errMsg = error.message;
        dispatch(fetchDetailScreenFailure(errMsg));
      });
  };
};

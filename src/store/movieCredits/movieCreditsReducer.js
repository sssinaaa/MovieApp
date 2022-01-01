import {
  MOVIE_CREDITS_REQUEST,
  MOVIE_CREDITS_SUCCESS,
  MOVIE_CREDITS_FAILURE,
} from './movieCreditsTypes';

const initialState = {
  loading: false,
  credits: [],
  error: '',
};

const movieCreditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_CREDITS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_CREDITS_SUCCESS:
      return {
        loading: false,
        credits: action.payload,
        error: '',
      };
    case MOVIE_CREDITS_FAILURE:
      return {
        loading: false,
        credits: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default movieCreditsReducer;

import {
  UPCOMING_MOVIES_REQUEST,
  UPCOMING_MOVIES_SUCCESS,
  UPCOMING_MOVIES_FAILURE,
} from './upcomingMoviesTypes';

const initialState = {
  loading: false,
  upcomingMovies: [],
  error: '',
};

const upcomingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPCOMING_MOVIES_SUCCESS:
      return {
        loading: false,
        state: action.payload,
        error: '',
      };
    case UPCOMING_MOVIES_FAILURE:
      return {
        loading: false,
        state: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

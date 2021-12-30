import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from './popularTypes';

const initialState = {
  loading: false,
  popularMovies: [],
  error: '',
};

const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        loading: false,
        popularMovies: action.payload,
        error: '',
      };
    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        loading: false,
        popularMovies: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default popularMoviesReducer;

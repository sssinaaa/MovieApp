import {
  FETCH_POPULAR_SERIES_REQUEST,
  FETCH_POPULAR_SERIES_SUCCESS,
  FETCH_POPULAR_SERIES_FAILURE,
} from './popularSeriesTypes';

const initialState = {
  loading: false,
  popularSeries: [],
  error: '',
};

const popularSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_SERIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POPULAR_SERIES_SUCCESS:
      return {
        loading: false,
        popularSeries: action.payload,
        error: '',
      };
    case FETCH_POPULAR_SERIES_FAILURE:
      return {
        loading: false,
        popularSeries: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default popularSeriesReducer;

import {
  DETAIL_SCREEN_REQUEST,
  DETAIL_SCREEN_SUCCESS,
  DETAIL_SCREEN_FAILURE,
} from './detailScreenTypes';

const initalState = {
  loading: false,
  details: [],
  credits: [],
  error: '',
};

const detailScreenReducer = (state = initalState, action) => {
  switch (action.type) {
    case DETAIL_SCREEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_SCREEN_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: '',
      };
    case DETAIL_SCREEN_FAILURE:
      return {
        loading: false,
        details: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default detailScreenReducer;

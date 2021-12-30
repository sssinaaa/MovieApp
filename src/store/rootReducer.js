import {combineReducers} from 'redux';
import popularMoviesReducer from './popularMovies/popularReducer';

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
});

export default rootReducer;

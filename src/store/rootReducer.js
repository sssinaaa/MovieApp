import {combineReducers} from 'redux';
import popularMoviesReducer from './popularMovies/popularReducer';
import popularSeriesReducer from './popularSeries/popularSeriesReducer';

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  popularSeries: popularSeriesReducer,
});

export default rootReducer;

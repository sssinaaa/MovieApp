import {combineReducers} from 'redux';
import popularMoviesReducer from './popularMovies/popularReducer';
import popularSeriesReducer from './popularSeries/popularSeriesReducer';
import upcomingMoviesReducer from './upcomingMovies/upcomingMoviesReducer';

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  popularSeries: popularSeriesReducer,
  upcomingMovies: upcomingMoviesReducer,
});

export default rootReducer;

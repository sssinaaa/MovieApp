import {combineReducers} from 'redux';
import popularMoviesReducer from './popularMovies/popularReducer';
import popularSeriesReducer from './popularSeries/popularSeriesReducer';
import upcomingMoviesReducer from './upcomingMovies/upcomingMoviesReducer';
import detailScreenReducer from './detailScreen/detailScreenReducer';

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  popularSeries: popularSeriesReducer,
  upcomingMovies: upcomingMoviesReducer,
  detailScreen: detailScreenReducer,
});

export default rootReducer;

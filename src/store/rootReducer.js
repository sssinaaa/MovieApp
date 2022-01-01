import {combineReducers} from 'redux';
import popularMoviesReducer from './popularMovies/popularReducer';
import popularSeriesReducer from './popularSeries/popularSeriesReducer';
import upcomingMoviesReducer from './upcomingMovies/upcomingMoviesReducer';
import detailScreenReducer from './detailScreen/detailScreenReducer';
import movieCreditsReducer from './movieCredits/movieCreditsReducer';

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  popularSeries: popularSeriesReducer,
  upcomingMovies: upcomingMoviesReducer,
  detailScreen: detailScreenReducer,
  movieCredits: movieCreditsReducer,
});

export default rootReducer;

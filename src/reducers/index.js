import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';

export default combineReducers({
  movieListState: movieListReducer
});

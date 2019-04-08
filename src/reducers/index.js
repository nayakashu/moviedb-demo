import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';
import modalReducer from './modalReducer';
import navReducer from './navReducer';

export default combineReducers({
  movieListState: movieListReducer,
  modalState: modalReducer,
  navState: navReducer
});

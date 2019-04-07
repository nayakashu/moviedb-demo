import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  movieListState: movieListReducer,
  modalState: modalReducer
});

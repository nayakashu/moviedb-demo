import {
  OPEN_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
  OPEN_ADD_MOVIE,
  CLOSE_ADD_MOVIE,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../actions/types';

const initialState = {
  loginModalOpen: false,
  addMovieModalOpen: false,
  modalType: null,
  modalMessge: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Open login form
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        loginModalOpen: true
      };

    // Close login form
    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        loginModalOpen: false
      };

    // Open add movie form
    case OPEN_ADD_MOVIE:
      return {
        ...state,
        addMovieModalOpen: true
      };

    // Close add movie form
    case CLOSE_ADD_MOVIE:
      return {
        ...state,
        addMovieModalOpen: false
      };

    // Show notification
    case SHOW_NOTIFICATION:
      return {
        ...state,
        modalMessage: action.payload.message,
        modalType: action.payload.type
      };

    // Hide notification
    case HIDE_NOTIFICATION:
      return {
        ...state,
        modalMessage: null,
        modalType: null
      };

    default:
      return state;
  }
}

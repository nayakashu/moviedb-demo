import {
  OPEN_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
  OPEN_ADD_MOVIE,
  CLOSE_ADD_MOVIE,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from './types';

// Open login form
export const openLoginForm = () => dispatch => {
  dispatch({
    type: OPEN_LOGIN_FORM
  });
};

// Close login form
export const closeLoginForm = () => dispatch => {
  dispatch({
    type: CLOSE_LOGIN_FORM
  });
};

// Open Add Movie
export const openAddMovie = () => dispatch => {
  dispatch({
    type: OPEN_ADD_MOVIE
  });
};

// Close Add Movie
export const closeAddMovie = () => dispatch => {
  dispatch({
    type: CLOSE_ADD_MOVIE
  });
};

// Show a notification
export const showNotification = (message, type) => dispatch => {
  dispatch({
    type: SHOW_NOTIFICATION,
    payload: {
      message: message,
      type: type
    }
  });
};

// Hide notification
export const hideNotification = () => dispatch => {
  dispatch({
    type: HIDE_NOTIFICATION
  });
};

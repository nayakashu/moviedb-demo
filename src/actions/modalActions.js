import {
  OPEN_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
  OPEN_ADD_MOVIE,
  CLOSE_ADD_MOVIE
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

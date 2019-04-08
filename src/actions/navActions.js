import {
  OPEN_LEFT_NAV,
  CLOSE_LEFT_NAV,
  TOGGLE_LEFT_NAV,
  SET_ACTIVE_PAGE,
  SET_USER_LOGIN
} from './types';

// Open left nav menu
export const openLeftNav = () => dispatch => {
  dispatch({
    type: OPEN_LEFT_NAV
  });
};

// Close left nav menu
export const closeLeftNav = () => dispatch => {
  dispatch({
    type: CLOSE_LEFT_NAV
  });
};

// Toggle left nav menu
export const toggleLeftNav = () => dispatch => {
  dispatch({
    type: TOGGLE_LEFT_NAV
  });
};

// Set active page
export const setActivePage = () => dispatch => {
  dispatch({
    type: SET_ACTIVE_PAGE,
    payload: window.location.hash
  });
};

// Set logged in user
export const setUserLogin = () => dispatch => {
  dispatch({
    type: SET_USER_LOGIN
  });
};

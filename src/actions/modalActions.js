import { OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM } from './types';

// Open login form
export const openLoginForm = () => dispatch => {
  dispatch({
    type: OPEN_LOGIN_FORM
  });
};

// Close login form
export const closeLoginForm = () => dispatch => {
  console.log('Close modal');
  dispatch({
    type: CLOSE_LOGIN_FORM
  });
};

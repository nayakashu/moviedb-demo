import { OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM } from '../actions/types';

const initialState = {
  modalOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Open login form
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        modalOpen: true
      };

    // Close login form
    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        modalOpen: false
      };

    default:
      return state;
  }
}

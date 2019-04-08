import {
  OPEN_LEFT_NAV,
  CLOSE_LEFT_NAV,
  TOGGLE_LEFT_NAV,
  SET_ACTIVE_PAGE,
  SET_USER_LOGIN
} from '../actions/types';

const initialState = {
  leftNavOpen: false,
  activePage: '/',
  isUserLoggedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Open nav menu
    case OPEN_LEFT_NAV:
      return {
        ...state,
        leftNavOpen: true
      };

    // Close nav menu
    case CLOSE_LEFT_NAV:
      return {
        ...state,
        leftNavOpen: false
      };

    // Toggle nav menu
    case TOGGLE_LEFT_NAV:
      return {
        ...state,
        leftNavOpen: !state.leftNavOpen
      };

    // Set active page
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      };

    // Set user login
    case SET_USER_LOGIN:
      return {
        ...state,
        isUserLoggedIn: true
      };

    default:
      return state;
  }
}

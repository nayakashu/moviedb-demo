import {
  OPEN_LEFT_NAV,
  CLOSE_LEFT_NAV,
  TOGGLE_LEFT_NAV
} from '../actions/types';

const initialState = {
  leftNavOpen: false
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

    default:
      return state;
  }
}

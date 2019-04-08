import { FETCH_TOP_MOVIES, FETCH_USER_MOVIES } from '../actions/types';

const initialState = {
  topMovies: null,
  userMovies: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Show list of top 10 movies
    case FETCH_TOP_MOVIES:
      return {
        ...state,
        topMovies: action.payload
      };

    // Show user's list of movie
    case FETCH_USER_MOVIES:
      return {
        ...state,
        userMovies: action.payload
      };

    default:
      return state;
  }
}

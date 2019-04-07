import { FETCH_TOP_MOVIES } from '../actions/types';

const initialState = {
  topMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Show list of top 10 movies
    case FETCH_TOP_MOVIES:
      return {
        ...state,
        topMovies: action.payload
      };

    default:
      return state;
  }
}

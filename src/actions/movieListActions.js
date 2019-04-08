import { FETCH_TOP_MOVIES, FETCH_USER_MOVIES } from './types';
import axios from 'axios';
import { ENDPOINT_URLS, USER_MOVIES_LS_KEY } from '../appConfig';

// Fetches list of top 10 movies
export const fetchTopMovies = () => dispatch => {
  axios.get(ENDPOINT_URLS.FETCH_TOP_MOVIES).then(responses => {
    dispatch({
      type: FETCH_TOP_MOVIES,
      payload: responses && responses.data && responses.data.results
    });
  });
};

// Fetch list of movies added by the user
export const fetchMyMovies = () => dispatch => {
  try {
    // Fetch user's list of movies from localstorage
    let moviesList = localStorage.getItem(USER_MOVIES_LS_KEY);

    if (!moviesList) {
      moviesList = JSON.stringify([238, 497, 517814, 40096, 539]);
      localStorage.setItem(USER_MOVIES_LS_KEY, moviesList);
    }

    const moviesListArr = JSON.parse(moviesList);

    // Make ajax calls to get details about all the shortlisted movies
    const promiseList = moviesListArr.map(item =>
      axios.get(ENDPOINT_URLS.FETCH_MOVIE_DETAILS.replace('<MOVIE_ID>', item))
    );

    Promise.all(promiseList).then(responses => {
      return dispatch({
        type: FETCH_USER_MOVIES,
        payload: responses
      });
    });
  } catch (ex) {}
};

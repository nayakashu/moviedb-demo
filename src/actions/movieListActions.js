import { FETCH_TOP_MOVIES, FETCH_USER_MOVIES } from './types';
import axios from 'axios';
import { ENDPOINT_URLS, USER_MOVIES_LS_KEY } from '../appConfig';

// Fetch details of user movies
const getMovieDetails = movieIds => {
  // Make ajax calls to get details about all the shortlisted movies
  const promiseList = movieIds.map(item =>
    axios.get(ENDPOINT_URLS.FETCH_MOVIE_DETAILS.replace('<MOVIE_ID>', item))
  );

  return Promise.all(promiseList);
};

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

    getMovieDetails(moviesListArr).then(responses => {
      return dispatch({
        type: FETCH_USER_MOVIES,
        payload: responses
      });
    });
  } catch (ex) {}
};

// Add new movie to user's list
export const addNewMovie = movieId => dispatch => {
  try {
    // Fetch user's list of movies from localstorage
    let moviesList = localStorage.getItem(USER_MOVIES_LS_KEY);

    if (!moviesList) {
      moviesList = JSON.stringify([238, 497, 517814, 40096, 539]);
      localStorage.setItem(USER_MOVIES_LS_KEY, moviesList);
    }

    let moviesListArr = JSON.parse(moviesList);

    // Add new movie if not already present
    if (moviesListArr.indexOf(movieId) < 0) {
      moviesListArr.push(movieId);

      // Save new list in localstorage
      localStorage.setItem(USER_MOVIES_LS_KEY, JSON.stringify(moviesListArr));
    }

    getMovieDetails(moviesListArr).then(responses => {
      return dispatch({
        type: FETCH_USER_MOVIES,
        payload: responses
      });
    });
  } catch (ex) {}
};

// Delete movie from user's list
export const deleteMovie = movieId => dispatch => {
  try {
    // Fetch user's list of movies from localstorage
    let moviesList = localStorage.getItem(USER_MOVIES_LS_KEY);

    if (!moviesList) {
      moviesList = JSON.stringify([238, 497, 517814, 40096, 539]);
      localStorage.setItem(USER_MOVIES_LS_KEY, moviesList);
    }

    let moviesListArr = JSON.parse(moviesList);

    // Delete the movie
    const movieIndex = moviesListArr.indexOf(movieId);
    if (movieIndex > -1) {
      moviesListArr.splice(movieIndex, 1);
    }

    // Save new list in localstorage
    localStorage.setItem(USER_MOVIES_LS_KEY, JSON.stringify(moviesListArr));

    getMovieDetails(moviesListArr).then(responses => {
      return dispatch({
        type: FETCH_USER_MOVIES,
        payload: responses
      });
    });
  } catch (ex) {}
};

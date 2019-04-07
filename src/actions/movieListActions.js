import { FETCH_TOP_MOVIES } from './types';
import axios from 'axios';
import { ENDPOINT_URLS } from '../appConfig';

// Fetches list of top 10 movies
export const fetchTopMovies = () => dispatch => {
  axios.get(ENDPOINT_URLS.FETCH_TOP_MOVIES).then(responses => {
    dispatch({
      type: FETCH_TOP_MOVIES,
      payload: responses && responses.data && responses.data.results
    });
  });
};

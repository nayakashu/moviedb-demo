import { FETCH_TOP_MOVIES } from './types';
import axios from 'axios';

// Fetches list of top 10 movies
export const fetchTopMovies = () => dispatch => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=4f4f0d30ce7338e679e02e58c211e9bb&page=1'
    )
    .then(responses => {
      console.log('Movies', responses);
      dispatch({
        type: FETCH_TOP_MOVIES,
        payload: responses && responses.data && responses.data.results
      });
    });
};

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '4f4f0d30ce7338e679e02e58c211e9bb';

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const ENDPOINT_URLS = {
  FETCH_TOP_MOVIES: BASE_URL + `top_rated?api_key=${API_KEY}&page=1`
};

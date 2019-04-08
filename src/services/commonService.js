// Check if movie is already added to user's favorite list
export const isMovieAdded = (movieId, userMovies) => {
  if (userMovies) {
    return userMovies.some(item => item['data']['id'] === movieId);
  }
  return false;
};

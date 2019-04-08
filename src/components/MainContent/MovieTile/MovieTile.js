import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieTile.scss';
import PropTypes from 'prop-types';
import { addNewMovie, deleteMovie } from '../../../actions/movieListActions';
import { showNotification } from '../../../actions/modalActions';
import { POSTER_BASE_URL, NOTIF_TYPES } from '../../../appConfig';

export class MovieTile extends Component {
  sliceDesc(desc, sliceLength = 85) {
    if (desc && desc.length > sliceLength) {
      return desc.slice(0, sliceLength) + ' ...';
    }
    return desc;
  }

  addMovieToList = movieId => {
    this.props.addNewMovie(movieId);
    this.props.showNotification(
      'Movie was added successfully',
      NOTIF_TYPES.SUCCESS
    );
  };

  deleteMovie = movieId => {
    this.props.deleteMovie(movieId);
    this.props.showNotification(
      'Movie was deleted successfully',
      NOTIF_TYPES.DANGER
    );
  };

  render() {
    const movieDetails = this.props.movieDetails;

    return movieDetails ? (
      <div className="movie-tile">
        <span className="popularity">
          {Math.round(movieDetails.popularity)}%
          <span className="bottom-border" />
        </span>

        {this.props.editable ? (
          <i
            className="material-icons ellipsis"
            onClick={() => this.deleteMovie(movieDetails.id)}
          >
            close
          </i>
        ) : (
          <i
            className="material-icons btn-like"
            onClick={() => this.addMovieToList(movieDetails.id)}
          >
            favorite_border
          </i>
        )}

        <img
          src={POSTER_BASE_URL + movieDetails.poster_path}
          alt={movieDetails.title}
        />
        <div className="movie-details">
          <h4>{this.sliceDesc(movieDetails.title, 30)}</h4>
          <div className="release-date">{movieDetails.release_date}</div>
          <div className="description">
            {this.sliceDesc(movieDetails.overview)}
          </div>
        </div>
      </div>
    ) : null;
  }
}

MovieTile.propTypes = {
  movieDetails: PropTypes.any,
  editable: PropTypes.any
};

export default connect(
  null,
  { addNewMovie, deleteMovie, showNotification }
)(MovieTile);

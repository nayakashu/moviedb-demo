import React, { Component } from 'react';
import './MovieTile.scss';
import PropTypes from 'prop-types';
import { POSTER_BASE_URL } from '../../../appConfig';

export class MovieTile extends Component {
  sliceDesc(desc, sliceLength = 85) {
    if (desc && desc.length > sliceLength) {
      return desc.slice(0, sliceLength) + ' ...';
    }
    return desc;
  }

  render() {
    const movieDetails = this.props.movieDetails;

    return movieDetails ? (
      <div className="movie-tile">
        <span className="popularity">
          {Math.round(movieDetails.popularity)}%
          <span className="bottom-border" />
        </span>

        {this.props.editable ? (
          <i className="material-icons ellipsis">close</i>
        ) : (
          <i className="material-icons btn-like">favorite_border</i>
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

export default MovieTile;

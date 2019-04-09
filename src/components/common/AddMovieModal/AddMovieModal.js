import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeAddMovie, showNotification } from '../../../actions/modalActions';
import { addNewMovie } from '../../../actions/movieListActions';
import './AddMovieModal.scss';
import makeModal from '../../hocs/makeModal/makeModal';
import { NOTIF_TYPES } from '../../../appConfig';

export class AddMovieModal extends Component {
  addMovie = evt => {
    this.props.closeAddMovie();
    this.props.showNotification(
      'New movie added successfully',
      NOTIF_TYPES.SUCCESS
    );

    // Navigate to my movies page
    window.location = '#/mymovies';

    // Add the movie - Grave of the fireflies as default
    this.props.addNewMovie(12477);

    evt.preventDefault();
  };

  render() {
    return (
      <div className="login-form">
        <span className="logo">
          <i className="material-icons">timeline</i>
          <span className="logo-text">Add Movie</span>
        </span>

        <i
          className="material-icons btn-close"
          onClick={this.props.closeAddMovie}
        >
          close
        </i>

        <form>
          <input type="text" placeholder="Movie Title" />
          <input type="text" placeholder="Casts" />
          <div className="row">
            <div className="col-sm-6 icon-overlay">
              <input type="text" placeholder="Date of Launch" />
              <i className="material-icons">date_range</i>
            </div>
            <div className="col-sm-6 icon-overlay">
              <input type="text" placeholder="Movie Poster" />
              <i className="material-icons">cloud_upload</i>
            </div>
          </div>
          <textarea className="txt-movie-desc" placeholder="Movie overview" />
          <div className="row">
            <div className="col-sm-6">
              <button className="btn-cancel" onClick={this.props.closeAddMovie}>
                Cancel
              </button>
            </div>
            <div className="col-sm-6">
              <button className="btn-login" onClick={this.addMovie}>
                Add Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default makeModal(
  connect(
    null,
    { closeAddMovie, showNotification, addNewMovie }
  )(AddMovieModal)
);

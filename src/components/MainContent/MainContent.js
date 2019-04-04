import React, { Component } from 'react';
import './MainContent.scss';
import MovieTile from './MovieTile/MovieTile';

export class MainContent extends Component {
  render() {
    return (
      <div className="container top-rated-movies">
        <h3>Top Rated Movies</h3>
        <div className="row">
          <div className="col-sm-4">
            <MovieTile />
          </div>
          <div className="col-sm-4">
            <MovieTile />
          </div>
          <div className="col-sm-4">
            <MovieTile />
          </div>
          <div className="col-sm-4">
            <MovieTile />
          </div>
          <div className="col-sm-4">
            <MovieTile />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainContent.scss';
import MovieTile from './MovieTile/MovieTile';
import { fetchTopMovies } from '../../actions/movieListActions';

export class MainContent extends Component {
  componentDidMount() {
    this.props.fetchTopMovies();
    console.log('Movies', this.props.topMovies);
  }

  render() {
    return (
      <div className="container top-rated-movies">
        <h3>Top Rated Movies</h3>
        <div className="row">
          {this.props.topMovies.map(item => (
            <div className="col-sm-4 col-xs-6" key={item.id}>
              <MovieTile />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topMovies: state.movieListState.topMovies
});

export default connect(
  mapStateToProps,
  { fetchTopMovies }
)(MainContent);

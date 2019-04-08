import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTile from '../MovieTile/MovieTile';
import Loader from '../../common/Loader/Loader';
import { closeLeftNav, setActivePage } from '../../../actions/navActions';
import { isMovieAdded } from '../../../services/commonService';
import './TopMovies.scss';

export class TopMovies extends Component {
  componentDidMount() {
    this.props.closeLeftNav();
    this.props.setActivePage();
  }

  render() {
    return (
      <div className="top-rated-movies">
        <h3>Top Rated Movies</h3>
        {this.props.topMovies ? null : <Loader />}
        <div className="row">
          {this.props.topMovies &&
            this.props.topMovies.map(item => (
              <div className="col-sm-4 col-xs-6" key={item.id}>
                <MovieTile
                  movieDetails={item}
                  isAdded={isMovieAdded(item.id, this.props.userMovies)}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topMovies: state.movieListState.topMovies,
  userMovies: state.movieListState.userMovies
});

export default connect(
  mapStateToProps,
  { closeLeftNav, setActivePage }
)(TopMovies);

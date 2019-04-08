import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTile from '../MovieTile/MovieTile';
import Loader from '../../common/Loader/Loader';
import { closeLeftNav, setActivePage } from '../../../actions/navActions';
import { fetchMyMovies } from '../../../actions/movieListActions';
import './MyMovies.scss';

export class MyMovies extends Component {
  componentDidMount() {
    this.props.fetchMyMovies();
    this.props.closeLeftNav();
    this.props.setActivePage();
  }

  render() {
    return (
      <div className="top-rated-movies">
        <h3>My Movies</h3>
        {this.props.userMovies ? null : <Loader />}
        <div className="row">
          {this.props.userMovies &&
            this.props.userMovies.map((item, index) => (
              <div className="col-sm-4 col-xs-6" key={index}>
                <MovieTile movieDetails={item && item.data} editable={true} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userMovies: state.movieListState.userMovies
});

export default connect(
  mapStateToProps,
  { closeLeftNav, fetchMyMovies, setActivePage }
)(MyMovies);

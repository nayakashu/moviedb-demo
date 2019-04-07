import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainContent.scss';
import MovieTile from './MovieTile/MovieTile';
import { fetchTopMovies } from '../../actions/movieListActions';
import Loader from '../common/Loader/Loader';
import LoginModal from './LoginModal/LoginModal';

export class MainContent extends Component {
  constructor(props) {
    super(props);
    // Fetch list of top movies
    this.props.fetchTopMovies();
  }

  render() {
    return (
      <div className="container top-rated-movies">
        <h3>Top Rated Movies</h3>
        {this.props.topMovies ? null : <Loader />}
        <div className="row">
          {this.props.topMovies &&
            this.props.topMovies.map(item => (
              <div className="col-sm-4 col-xs-6" key={item.id}>
                <MovieTile movieDetails={item} />
              </div>
            ))}
        </div>

        {this.props.modalOpen ? <LoginModal /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topMovies: state.movieListState.topMovies,
  modalOpen: state.modalState.modalOpen
});

export default connect(
  mapStateToProps,
  { fetchTopMovies }
)(MainContent);

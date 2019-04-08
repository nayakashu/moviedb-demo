import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './MainContent.scss';
import { fetchTopMovies } from '../../actions/movieListActions';
import LoginModal from '../common/LoginModal/LoginModal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TopMovies from './TopMovies/TopMovies';

export class MainContent extends Component {
  constructor(props) {
    super(props);
    // Fetch list of top movies
    this.props.fetchTopMovies();
  }

  render() {
    const loginModal = this.props.modalOpen ? <LoginModal /> : null;

    return (
      <div className="container">
        <Route exact path="/" component={TopMovies} />

        <ReactCSSTransitionGroup
          transitionName="login-tran"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {loginModal}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.modalState.modalOpen
});

export default connect(
  mapStateToProps,
  { fetchTopMovies }
)(MainContent);

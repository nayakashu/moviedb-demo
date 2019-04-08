import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './MainContent.scss';
import { fetchTopMovies, fetchMyMovies } from '../../actions/movieListActions';
import LoginModal from '../common/LoginModal/LoginModal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TopMovies from './TopMovies/TopMovies';
import MyMovies from './MyMovies/MyMovies';
import LeftNav from '../common/LeftNav/LeftNav';
import AddMovieModal from '../common/AddMovieModal/AddMovieModal';
import Notification from '../common/Notification/Notification';

export class MainContent extends Component {
  constructor(props) {
    super(props);
    // Fetch list of top movies & user movies
    this.props.fetchTopMovies();
    this.props.fetchMyMovies();
  }

  render() {
    const loginModal = this.props.loginModalOpen ? <LoginModal /> : null;
    const addMovieModal = this.props.addMovieModalOpen ? (
      <AddMovieModal />
    ) : null;
    const leftNav = this.props.leftNavOpen ? <LeftNav /> : null;
    const notification = this.props.modalMessage ? (
      <Notification
        type={this.props.modalType}
        message={this.props.modalMessage}
      />
    ) : null;

    return (
      <div className="container">
        <Route exact path="/" component={TopMovies} />
        <Route exact path="/mymovies" component={MyMovies} />

        <ReactCSSTransitionGroup
          transitionName="login-tran"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {loginModal}
          {leftNav}
          {addMovieModal}
          {notification}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginModalOpen: state.modalState.loginModalOpen,
  addMovieModalOpen: state.modalState.addMovieModalOpen,
  leftNavOpen: state.navState.leftNavOpen,
  modalMessage: state.modalState.modalMessage,
  modalType: state.modalState.modalType
});

export default connect(
  mapStateToProps,
  { fetchTopMovies, fetchMyMovies }
)(MainContent);

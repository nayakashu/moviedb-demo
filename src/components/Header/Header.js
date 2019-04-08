import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openLoginForm, openAddMovie } from '../../actions/modalActions';
import { toggleLeftNav } from '../../actions/navActions';

import './Header.scss';

export class Header extends Component {
  render() {
    const loggedInSection = (
      <span>
        <button className="btn-add" onClick={this.props.openAddMovie}>
          <i className="material-icons menu-icon">add</i>
          Add Movie
        </button>
        <img
          className="avatar-img"
          src="http://www.gravatar.com/avatar/4986132725905e951d64a41340178e63?s=200&r=pg&d=mm"
          alt="User Avatar"
        />
      </span>
    );

    const loginSignupSection = (
      <span>
        <button className="btn-login" onClick={this.props.openLoginForm}>
          Login
        </button>
        <button className="btn-signup">Sign Up</button>
      </span>
    );

    return (
      <div className="header-container">
        <div className="container">
          <div className="row main-menu">
            <div className="col-sm-3 logo-div">
              <i
                className="material-icons menu-icon"
                onClick={this.props.toggleLeftNav}
              >
                menu
              </i>
              <span className="logo">
                <i className="material-icons menu-icon">timeline</i>
                <span className="logo-text">MovieHunt</span>
              </span>
            </div>
            <div className="col-sm-6">
              <ul className="menu-items">
                <Link to="/">
                  <li
                    className={this.props.activePage === '#/' ? 'active' : ''}
                  >
                    Top Rated
                  </li>
                </Link>
                <Link to="/mymovies">
                  <li
                    className={
                      this.props.activePage === '#/mymovies' ? 'active' : ''
                    }
                  >
                    My Movies
                  </li>
                </Link>
                <li>Discover</li>
              </ul>
            </div>
            <div className="col-sm-3 login-section">
              {this.props.isUserLoggedIn ? loggedInSection : loginSignupSection}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activePage: state.navState.activePage,
  isUserLoggedIn: state.navState.isUserLoggedIn
});

export default connect(
  mapStateToProps,
  { openLoginForm, toggleLeftNav, openAddMovie }
)(Header);

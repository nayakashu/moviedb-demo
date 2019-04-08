import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openLoginForm } from '../../actions/modalActions';
import { toggleLeftNav } from '../../actions/navActions';

import './Header.scss';

export class Header extends Component {
  componentDidMount() {
    console.log('saware', window.location.hash.substr(2));
  }

  render() {
    const loggedInSection = (
      <span>
        <button className="btn-add">
          <i class="material-icons menu-icon">add</i>
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
                <li className="active">
                  <Link to="/">Top Rated</Link>
                </li>
                <li>
                  <Link to="/mymovies">My Movies</Link>
                </li>
                <li>Discover</li>
              </ul>
            </div>
            <div className="col-sm-3 login-section">
              {true ? loginSignupSection : loggedInSection}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { openLoginForm, toggleLeftNav }
)(Header);

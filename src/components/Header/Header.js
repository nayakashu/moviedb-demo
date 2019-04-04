import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
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
        <button
          className="btn-login"
          onClick={() => this.setState({ loggedIn: true })}
        >
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
              <i className="material-icons menu-icon">menu</i>
              <span className="logo">
                <i className="material-icons menu-icon">timeline</i>
                <span className="logo-text">MovieHunt</span>
              </span>
            </div>
            <div className="col-sm-6">
              <ul className="menu-items">
                <li className="active">Top Rated</li>
                <li>Movies</li>
                <li>Discover</li>
              </ul>
            </div>
            <div className="col-sm-3 login-section">
              {this.state.loggedIn ? loggedInSection : loginSignupSection}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

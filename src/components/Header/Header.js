import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="container">
          <div className="row main-menu">
            <div className="col-sm-3 logo-div">
              <i class="material-icons menu-icon">menu</i>
              <span className="logo">
                <i class="material-icons menu-icon">timeline</i>
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
            <div className="col-sm-3 user-profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

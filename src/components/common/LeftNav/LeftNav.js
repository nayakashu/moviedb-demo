import React, { Component } from 'react';

export class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav-container">
        <ul className="left-nav-menu">
          <li>Top Movies</li>
          <li>My Movies</li>
          <li>Discover</li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;

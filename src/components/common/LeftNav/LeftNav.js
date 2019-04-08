import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeLeftNav } from '../../../actions/navActions';
import './LeftNav.scss';

export class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav-container">
        <i
          className="material-icons left-nav-close"
          onClick={this.props.closeLeftNav}
        >
          close
        </i>
        <ul className="left-nav-menu">
          <li>
            <Link to="/">
              <i className="material-icons">movie</i>Top Movies
            </Link>
          </li>
          <li>
            <Link to="/mymovies">
              <i className="material-icons">person</i> My Movies
            </Link>
          </li>
          <li>
            <i className="material-icons">settings</i>Settings
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { closeLeftNav }
)(LeftNav);

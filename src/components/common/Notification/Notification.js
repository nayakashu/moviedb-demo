import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Notification.scss';

export class Notification extends Component {
  render() {
    const notifClasses = classNames('notif-container', this.props.type);

    return (
      <div className={notifClasses}>
        <div className="notif-message">
          <i className="material-icons icon-notif">notifications</i>Bomb lagdi
          menu
        </div>
        <i className="material-icons btn-close">close</i>
      </div>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string
};

export default Notification;

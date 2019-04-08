import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideNotification } from '../../../actions/modalActions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Notification.scss';

export class Notification extends Component {
  componentDidMount() {
    // Hide notification after 3 seconds
    setTimeout(() => {
      this.props.hideNotification();
    }, 2000);
  }

  render() {
    const notifClasses = classNames('notif-container', this.props.type);

    return (
      <div className={notifClasses}>
        <div className="notif-message">
          <i className="material-icons icon-notif">notifications</i>
          {this.props.message}
        </div>
        <i
          className="material-icons btn-close"
          onClick={this.props.hideNotification}
        >
          close
        </i>
      </div>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default connect(
  null,
  { hideNotification }
)(Notification);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeLoginForm } from '../../../actions/modalActions';
import { setUserLogin } from '../../../actions/navActions';
import './LoginModal.scss';
import makeModal from '../../hocs/makeModal/makeModal';

export class LoginModal extends Component {
  performUserLogin = () => {
    this.props.setUserLogin();
    this.props.closeLoginForm();
  };

  render() {
    return (
      <div className="login-form">
        <span className="logo">
          <i className="material-icons">timeline</i>
          <span className="logo-text">MovieHunt</span>
        </span>

        <i
          className="material-icons btn-close"
          onClick={this.props.closeLoginForm}
        >
          close
        </i>

        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="btn-login" onClick={this.performUserLogin}>
            Login
          </button>
        </form>

        <div className="forgot-pass-legend">
          <span className="signup-link">
            Don't have an account? <a href="/#/">Sign up</a>
          </span>
          <span className="recover-pass">Recover password</span>
        </div>
      </div>
    );
  }
}

export default makeModal(
  connect(
    null,
    { closeLoginForm, setUserLogin }
  )(LoginModal)
);

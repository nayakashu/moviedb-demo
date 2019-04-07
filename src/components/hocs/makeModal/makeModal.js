// Page is a higher order component that takes any div and converts it into a modal
import React, { Component } from 'react';
import './makeModal.scss';

export const makeModal = Comp => {
  class MakeModal extends Component {
    render() {
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <Comp />
          </div>
        </div>
      );
    }
  }

  return MakeModal;
};

export default makeModal;

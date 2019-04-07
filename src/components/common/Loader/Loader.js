import React from 'react';
import './Loader.scss';
import loader from '../../../images/loader.svg';

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={loader} alt="" />
    </div>
  );
}

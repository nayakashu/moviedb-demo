import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;

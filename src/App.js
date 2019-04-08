import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './store';
import './App.scss';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import { LeftNav } from './components/common/LeftNav/LeftNav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <LeftNav />
            <MainContent />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

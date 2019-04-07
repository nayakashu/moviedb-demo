import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <MainContent />
        </div>
      </Provider>
    );
  }
}

export default App;

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Initial state
const initialState = {};

// Collection of middleware used
// Thunk - for supporting asynchronous actions
const middleware = [thunk];

// Setup a store for Redux
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : null
      )
    : applyMiddleware(...middleware)
);

export default store;

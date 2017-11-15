import React, { Component } from 'react';
import './App.css';
import { createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers';
import logger from 'redux-logger';
import FishkeeList from './containers/FishkeeList'
import Dialog from './containers/Dialog'

const store = createStore(reducer, applyMiddleware(logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <div className="App">
              <Dialog/>
              <FishkeeList/>
            </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers';
import logger from 'redux-logger';
import FishkeeList from './containers/FishkeeList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = createStore(reducer, applyMiddleware(logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <MuiThemeProvider>
            <div className="App">
              <FishkeeList/>
            </div>
          </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import SnackList from'../SnackList/SnackList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnackList />
      </div>
    );
  }
}

export default connect()(App);

import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
}

export default App;

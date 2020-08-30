import React, { Component } from 'react';
import './App.css';
import EntryList from './components/entryLists';
import ClippedDrawer from './components/hamburderNav';

class App extends Component {
  render() {
    return (
      <ClippedDrawer/>
    )
  }
}

export default App;

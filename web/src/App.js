import React, { Component } from 'react';
import './App.css';
import EntryList from './components/entryLists';

class App extends Component {

  render() {
    return (
      <EntryList
        pokemon={[
          { number: 15, shiny: false },
          { number: 25, shiny: false },
          { number: 35, shiny: false },
          { number: 45, shiny: false },
          { number: 55, shiny: false },
          { number: 65, shiny: true },
          { number: 75, shiny: false },
          { number: 85, shiny: false },
          { number: 95, shiny: true }
        ]}
      />
    )
  }
}

export default App;

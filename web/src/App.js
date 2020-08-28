import React, { Component } from 'react';
import './App.css';
import EntryList from './components/entryLists';

class App extends Component {

  getNumber = () => Math.floor(Math.random() * 700) + 1;

  getShiny = () => Math.random() > .9;

  render() {
    return (
      <EntryList
        pokemon={[
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()},
          { number: this.getNumber(), shiny: this.getShiny()}
        ]}
      />
    )
  }
}

export default App;

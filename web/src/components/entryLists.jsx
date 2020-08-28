import React, { Component } from 'react';
import Entry from './entry';

class EntryList extends Component {
    render() { 
        return ( 
            <div style={{display: 'flex', flexWrap: 'wrap', backgroundColor: '#F2F2F2'}}>
                {this.props.pokemon.map(pokemon => 
                    <Entry
                        key={pokemon.number}
                        number={pokemon.number}
                        shiny={pokemon.shiny}
                        caught={pokemon.caught}
                    />
                )}
            </div>
        );
    }
}
 
export default EntryList;
import React, { Component } from 'react';
import Entry from './entry';


class EntryList extends Component {
    render() { 
        return ( 
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.props.pokemon.map(pokemon => 
                    <Entry
                        number={pokemon.number}
                        shiny={pokemon.shiny}
                    />
                )}
            </div>
        );
    }
}
 
export default EntryList;
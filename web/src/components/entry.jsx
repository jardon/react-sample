import React, { Component } from 'react';
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import types from './types.js';

class Entry extends Component {
    state = {
        data: null
    }
        
    getData = async () => await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.number);
      
        
    componentDidMount() {
        this.getData()
        .then(data => this.setState({data}))
    }

    render() { 
        console.log(this.state.data)
        return ( 
            <Paper elevation={3} style={{padding:10, margin: 10, width: 120}}>
                {this.state.data && 
                <div>
                    <div >
                        <span style={{ marginRight: 'auto'}}><Typography display ='inline'>{this.state.data.data.name}</Typography></span> 
                        <span style={{ marginLeft: 'auto'}}><Typography display ='inline'>{this.state.data.data.id}</Typography></span>
                    </div>
                    <Divider/>
                    <div >
                        {this.props.shiny ?
                        <img src={this.state.data.data.sprites.front_shiny}></img> :
                        <img src={this.state.data.data.sprites.front_default}></img>}
                    </div>

                    <AvatarGroup max={4}>
                        {this.state.data.data.types.map(type => <Avatar alt={type.type.name} src={types[type.type.name]}></Avatar>)}
                    </AvatarGroup>  

                    
                </div>
                }
            </Paper>
        );
    }
}
 
export default Entry;


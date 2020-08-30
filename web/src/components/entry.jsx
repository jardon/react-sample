import React, { Component } from 'react';
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import types from './types.js';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

class Entry extends Component {
    state = {
        data: null,
        caught: this.props.caught ? true : false

    }
    
    catchPokemon = () => Math.random() > .4 ? this.setState({caught:true}) : null;

    getData = async () => await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.number);

    parseName = name => {
        let splitString = name.toLowerCase().split('-');
        return splitString[0].charAt(0).toUpperCase() + splitString[0].substring(1);
    }     
    
    getChipStyle = () => this.props.shiny ? { backgroundImage: 'linear-gradient(to bottom right, gold, orange)' } : {};
        
    componentDidMount() {
        this.getData()
        .then(data => this.setState({data}))
    }

    render() { 
        return ( 
            <Paper elevation={3} style={{padding:10, margin: 10, width: 120}}>
                {this.state.data && 
                <div>
                    <div style={{display: 'flex', marginBottom: 5}} >
                        <div style={{ marginRight: 'auto'}}><Typography display='inline'>{this.parseName(this.state.data.data.name)}</Typography></div> 
                        <div><Chip style={this.getChipStyle()} size='small' label={this.state.data.data.id} display='inline'/></div>
                    </div>
                    <Divider/>
                    <div>
                        {this.props.shiny ?
                        <img alt='shiny pokermon' style={{width: '100%', height: 'auto'}} src={this.state.data.data.sprites.front_shiny}></img> :
                        <img alt='boring normal pokerman' style={{width: '100%', height: 'auto'}} src={this.state.data.data.sprites.front_default}></img>}
                    </div>
                    <div style={{display: 'flex'}}>
                        <AvatarGroup max={4}>
                            {this.state.data.data.types.map(type => <Avatar key={type.type.name}style={{height: 24, width: 24}} alt={type.type.name} src={types[type.type.name]}></Avatar>)}
                        </AvatarGroup>  

                        {this.state.caught ?
                        <Avatar src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png' style={{marginLeft: 'auto', width: 'auto' , height: '100%'}}/>: 
                        <Button variant='outlined' size='small' onClick={() => this.catchPokemon()} style={{marginLeft: 'auto'}}>Catch</Button> }                          
                    </div>
                </div>
                }
            </Paper>
        );
    }
}
 
export default Entry;


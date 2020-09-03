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
import Stats from './stats.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';


class Entry extends Component {
    state = {
        data: null,
        caught: this.props.caught ? true : false,
        dialogOpen: false,
        graphData: [
            {
              "taste": "fruity",
              "syrah": 69
            },
            {
              "taste": "bitter",
              "syrah": 29
            },
            {
              "taste": "heavy",
              "syrah": 60
            },
            {
              "taste": "strong",
              "syrah": 55
            },
            {
              "taste": "sunny",
              "syrah": 84
            }
          ],
        exclusions: ['normal', 'incarnate', 'ordinary', 'm', 'f', 'red', 'striped', 'aria', 'plant','standard', 'shield', 'altered', 'land']
    }
    
    catchPokemon = () => Math.random() > .4 ? this.setState({caught:true}) : null;

    getData = async () => await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.number);

    parseName = name => {
        let splitString = name.toLowerCase().split('-');
        let newString = "";
        splitString.forEach(item => !this.state.exclusions.includes(item) ? newString += item.charAt(0).toUpperCase() + item.substring(1) + " " : null)
        console.log(newString);
        return newString;
    }     
    
    getChipStyle = () => this.props.shiny ? { backgroundImage: 'linear-gradient(to bottom right, gold, orange)' } : {};
        
    componentDidMount() {
        let graphData = [];
        this.getData()
        .then(data => this.setState({data}))
        .then(() => graphData = this.state.data.data.stats.map(stat => { return { stat: this.parseName(stat.stat.name), [this.state.data.data.name]: stat.base_stat } }))
        .then(() => this.setState({graphData}))
    }

    handleClose = () => this.setState({ dialogOpen: false });

    handleOpen = () => this.setState({ dialogOpen: true });

    render() { 
        // console.log(this.state.data)
        return ( 
            <React.Fragment>
                <Paper elevation={3} style={{padding:10, margin: 10, width: 150}}>
                    {this.state.data ? 
                    <div>
                        <div onClick={() => this.handleOpen()}  style={{display: 'flex', marginBottom: 5}} >
                            <div style={{ marginRight: 'auto'}}><Typography display='inline'>{this.parseName(this.state.data.data.name)}</Typography></div> 
                            <div ><Chip style={this.getChipStyle()} size='small' label={this.state.data.data.id} display='inline'/></div>
                        </div>
                        <Divider/>
                        <div onClick={() => this.handleOpen()} >
                            {this.props.shiny ?
                            <img alt='shiny pokermon' style={{width: '100%', height: 'auto'}} src={this.state.data.data.sprites.front_shiny}></img> :
                            <img alt='boring normal pokerman' style={{width: '100%', height: 'auto'}} src={this.state.data.data.sprites.front_default}></img>}
                        </div>
                        <div style={{display: 'flex'}}>
                            <AvatarGroup max={4} onClick={() => this.handleOpen()} >
                                {this.state.data.data.types.map(type => <Avatar key={type.type.name}style={{height: 30, width: 30}} alt={type.type.name} src={types[type.type.name]}></Avatar>)}
                            </AvatarGroup>  

                            {this.state.caught ?
                            <Avatar src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png' style={{marginLeft: 'auto', width: 'auto' , height: '100%'}}/>: 
                            <Button variant='outlined' size='small' onClick={() => this.catchPokemon()} style={{marginLeft: 'auto'}}>Catch</Button> }                          
                        </div>
                    </div>
                    : <div style={{width: 40, height: 150, margin: "auto", marginTop: 55}}><CircularProgress /></div>}
                </Paper>
                {this.state.data && <Stats graphData={this.state.graphData} name={this.state.data.data.name} handleClose={() => this.handleClose()} dialogOpen ={this.state.dialogOpen}/>}
            </React.Fragment>
        );
    }
}
 
export default Entry;


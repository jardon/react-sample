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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { ResponsiveRadar } from '@nivo/radar';

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
          ]
    }
    
    catchPokemon = () => Math.random() > .4 ? this.setState({caught:true}) : null;

    getData = async () => await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.number);

    parseName = name => {
        let splitString = name.toLowerCase().split('-');
        return splitString[0].charAt(0).toUpperCase() + splitString[0].substring(1);
    }     
    
    getChipStyle = () => this.props.shiny ? { backgroundImage: 'linear-gradient(to bottom right, gold, orange)' } : {};
        
    componentDidMount() {
        let graphData = [];
        this.getData()
        .then(data => this.setState({data}))
        .then(() => graphData = this.state.data.data.stats.map(stat => { return { stat: stat.stat.name, [this.state.data.data.name]: stat.base_stat } }))
        .then(() => this.setState({graphData}))
    }

    // componentDidUpdate() {
    //     let graphData = this.state.data && 
    //     this.setState({ graphData })
    // }

    handleClose = () => this.setState({ dialogOpen: false });

    render() { 
        console.log(this.state.data)
        return ( 
            <React.Fragment>
                <Paper elevation={3} style={{padding:10, margin: 10, width: 120}}>
                    {this.state.data && 
                    <div>
                        <div onClick={() => this.setState({dialogOpen:true})}  style={{display: 'flex', marginBottom: 5}} >
                            <div style={{ marginRight: 'auto'}}><Typography display='inline'>{this.parseName(this.state.data.data.name)}</Typography></div> 
                            <div><Chip style={this.getChipStyle()} size='small' label={this.state.data.data.id} display='inline'/></div>
                        </div>
                        <Divider/>
                        <div onClick={() => this.setState({dialogOpen:true})} >
                            {this.props.shiny ?
                            <img alt='shiny pokermon' style={{width: '100%', height: 'auto'}} src={this.state.data.data.sprites.front_shiny}></img> :
                            <img alt='boring normal pokerman' style={{width: '100%', height: 'auto'}} src={this.state.data.data.sprites.front_default}></img>}
                        </div>
                        <div style={{display: 'flex'}}>
                            <AvatarGroup max={4} onClick={() => this.setState({dialogOpen:true})} >
                                {this.state.data.data.types.map(type => <Avatar key={type.type.name}style={{height: 24, width: 24}} alt={type.type.name} src={types[type.type.name]}></Avatar>)}
                            </AvatarGroup>  

                            {this.state.caught ?
                            <Avatar src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png' style={{marginLeft: 'auto', width: 'auto' , height: '100%'}}/>: 
                            <Button variant='outlined' size='small' onClick={() => this.catchPokemon()} style={{marginLeft: 'auto'}}>Catch</Button> }                          
                        </div>
                    </div>
                    }
                </Paper>
                {this.state.data && <Dialog open={this.state.dialogOpen} onClose={() => this.setState({ dialogOpen: false })}>
                    <DialogTitle id="customized-dialog-title" onClose={() => this.setState({ dialogOpen: false })}>
                        Statistics
                    </DialogTitle>
                    <DialogContent dividers>
                    <div style={{height:800, width:600}}>
                        <ResponsiveRadar
                            data={this.state.graphData}
                            keys={[ this.state.data.data.name ]}
                            indexBy="stat"
                            maxValue="auto"
                            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                            curve="linearClosed"
                            borderWidth={2}
                            borderColor={{ from: 'color' }}
                            gridLevels={5}
                            gridShape="hexagon"
                            gridLabelOffset={36}
                            enableDots={true}
                            dotSize={10}
                            dotColor={{ theme: 'background' }}
                            dotBorderWidth={2}
                            dotBorderColor={{ from: 'color' }}
                            enableDotLabel={true}
                            dotLabel="value"
                            dotLabelYOffset={-12}
                            colors={{ scheme: 'nivo' }}
                            fillOpacity={0.25}
                            blendMode="multiply"
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            isInteractive={true}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'column',
                                    translateX: -50,
                                    translateY: -40,
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemTextColor: '#999',
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={() => this.setState({ dialogOpen: false })} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                    </Dialog>}
            </React.Fragment>
        );
    }
}
 
export default Entry;


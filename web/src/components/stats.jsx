import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { ResponsiveRadar } from '@nivo/radar';
import Button from '@material-ui/core/Button';


class Stats extends Component {
    render() { 
        return ( 
            <Dialog open={this.props.dialogOpen} onClose={() => this.props.handleClose()}>
                    <DialogTitle id="customized-dialog-title" onClose={() => this.props.handleClose()}>
                        Statistics
                    </DialogTitle>
                    <DialogContent dividers>
                    <div style={{height:600, width:500}}>
                        <ResponsiveRadar
                            data={this.props.graphData}
                            keys={[ this.props.name ]}
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
                        />
                    </div>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={() => this.setState({ dialogOpen: false })} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                    </Dialog>
         );
    }
}
 
export default Stats;
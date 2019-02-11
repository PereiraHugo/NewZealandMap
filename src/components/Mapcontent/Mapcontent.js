import React from 'react';
import ColorPalette from './../Mapsettings/ColorPalette';
import StepSlider from './../Mapsettings/Slider';
import BasicMap from './../Topologicalmap/Topologicalmap';
import Grid from '@material-ui/core/Grid';

class Mapcontent extends React.Component {
    render() {
        return (
            <Grid container spacing={24} style={{paddingLeft:'20px'}}>
                <Grid item xs={4}>
                    <ColorPalette />
                    <StepSlider />
                </Grid>
                <Grid item xs={8}>
                    <svg width="960" height="600">
                        <BasicMap width={960} height={600} />        
                    </svg>
                </Grid>
            </Grid>
        );
    }
}

export default Mapcontent;
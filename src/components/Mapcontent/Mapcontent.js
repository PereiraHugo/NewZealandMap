import React from 'react';
import ColorPalette from './../Mapsettings/ColorPalette';
import StepSlider from './../Mapsettings/Slider';
import BasicMap from './../Topologicalmap/Topologicalmap';
import BaseMap from './../Topologicalmap/trymap'
import Grid from '@material-ui/core/Grid';

class Mapcontent extends React.Component {
    render() {
        return (
            <Grid container spacing={24} style={{paddingLeft:'20px'}}>
                <Grid item xs={2}>
                    <ColorPalette />
                    <StepSlider />
                </Grid>
                <Grid item xs={10}>
                    <BaseMap />
                </Grid>
            </Grid>
        );
    }
}
//<BasicMap width={782} height={628} /> 
export default Mapcontent;
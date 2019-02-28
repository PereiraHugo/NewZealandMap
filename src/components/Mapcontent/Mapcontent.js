import React from 'react';
import ColorPalette from './../Mapsettings/ColorPalette';
import StepSlider from './../Mapsettings/Slider';
import BasicMap2 from './../Topologicalmap/Topologicalmap';
import BasicMap from './../Topologicalmap/TopoTry';
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
                    <BasicMap />
                </Grid>
            </Grid>
        );
    }
}
//<BasicMap width={782} height={628} /> 
export default Mapcontent;
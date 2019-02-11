import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
import Grid from '@material-ui/core/Grid';
import './Slider.css';

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};

class StepSlider extends React.Component {
  state = {
    value: 100
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={8}>
                <Slider
                classes={{ container: classes.slider }}
                value={value}
                min={20}
                max={300}
                step={1}
                onChange={this.handleChange}
                />
            </Grid>
            <Grid item xs={4} style={{verticalAlign:'middle'}}>
                {this.state.value}%
            </Grid>
        </Grid>
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StepSlider);

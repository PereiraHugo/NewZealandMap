import React, { Component } from 'react';
//import queue from 'queue';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import nz_regions from './../../nz-regions.svg';

class BaseMap extends Component {
    render() {
      return (
          <div>
            <svg  src={nz_regions}/>
          </div>
      );
    }
  }


export default BaseMap
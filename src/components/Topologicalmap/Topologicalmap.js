import React, { Component } from 'react';
//import queue from 'queue';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import './Topologicalmap.css';

class BasicMap extends Component {
  state = {
    nzCoast : null,
  }

  componentWillMount() {
    let promises = [];
    promises.push(d3.json("nz-regions.json"))
    Promise.all(promises).then(result => {
      const [ nzCoast ] = result;
    
      this.setState({nzCoast }, () => {
        console.log(this.state);
      });
    });
  }

  componentDidUpdate() {
    const svg = d3.select(this.refs.anchor),
        {width, height} = this.props;

    const projection = d3.geoMercator()
        .scale(800)
        .translate([ -2000, -450]);
    
    const path = d3.geoPath(projection)

    const nz = this.state.nzCoast;

    svg.append("defs").append("path")
           .attr("id", "districts")
           .datum(topojson.feature(nz, nz.objects.nz_regions))
           .attr("d", path);
 
        svg.append("path")
           .attr("class", "state-boundaries")
           .datum(topojson.mesh(nz, nz.objects.nz_regions, function(a, b) { return a !== b; }))
           .attr("d", path);

  }

  render() {
    const { nzCoast } = this.state;
    if (!nzCoast) {
      return null
    }
    return <g ref='anchor' />;
  }
}

export default BasicMap


/*
class BasicMap extends Component {
  state = {
    usData : null,
    usCongress: null,
    color : "blue",
  }
  componentWillMount() {
    let promises = [];
    promises.push(d3.json("https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json"))
    promises.push(d3.json("https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us-congress-113.json"))
    Promise.all(promises).then(result => {
      const [ usData, usCongress ] = result;
    
      this.setState({usData, usCongress}, () => {
        console.log(this.state);
      });
    });
  }
  
  componentDidUpdate() {
    const svg = d3.select(this.refs.anchor),
        {width, height} = this.props;
    const projection = d3.geoAlbers()
                          .scale(1280)
                          .translate([width /2, height /2]);
    const path = d3.geoPath(projection)

    const us = this.state.usData,
    congress = this.state.usCongress;

    svg.append("defs").append("path")
           .attr("id", "land")
           .datum(topojson.feature(us, us.objects.land))
           .attr("d", path);
 
        svg.append("clipPath")
           .attr("id", "clip-land")
           .append("use")
           .attr("xlink:href", "#land");
 
        svg.append("g")
           .attr("class", "districts")
           .attr("clip-path", "url(#clip-land)")
           .selectAll("path")
           .data(topojson.feature(congress, congress.objects.districts).features)
           .enter().append("path")
           .attr("d", path)
           .append("title")
           .text(function(d) { return d.id; });
 
        svg.append("path")
           .attr("class", "district-boundaries")
           .datum(topojson.mesh(congress, congress.objects.districts, function(a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); }))
           .attr("d", path);
 
        svg.append("path")
           .attr("class", "state-boundaries")
           .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
           .attr("d", path)
           .attr('fill', this.state.color);

  }

  render() {
    const { usData } = this.state;
    if (!usData) {
      return null
    }
    return <g ref='anchor' />;
  }
}
*/


/*
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : '#ECEFF1'
    }
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography="nz-coastlines-topo-1500k.json">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: this.state.color,
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}
*/
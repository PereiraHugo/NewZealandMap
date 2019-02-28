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

class TopoTry extends Component {
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
            scale: 1500,
            rotation: [-11,0,0],
          }}
          width={840}
          height={400}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[170,-40]} disablePanning>
            <Geographies geography="Coastline-simplified.topojson">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    hover: {
                      fill: "#ffffff",
                      stroke: "#000000",
                      strokeWidth: 0.75,
                      outline: "none",
                    }
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

export default TopoTry
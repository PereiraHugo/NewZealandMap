import React from 'react';
import { CirclePicker } from 'react-color';
import BasicMap from './../Topologicalmap/Topologicalmap';

class ColorPalette extends React.Component {
  state = {
    background: '#fff',
  };

  changeBackgroundColor = (color) => {
    console.log(BasicMap.getColor);
    let body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = color.hex
  };

  render() {
    return (
      <CirclePicker
      color={ this.state.background }
      onChangeComplete={(color) => this.changeBackgroundColor(color)}
      />
    );
  }
}

export default ColorPalette



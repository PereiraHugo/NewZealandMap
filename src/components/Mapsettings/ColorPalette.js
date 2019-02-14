import React from 'react';
import ReactDOM from 'react-dom';
import { CirclePicker } from 'react-color';
import BasicMap from './../Topologicalmap/Topologicalmap';

class ColorPalette extends React.Component {
  state = {
    background: '#fff',
  };


  assignRef = element => {
    this.district = element;
  }

  getStyle = () => {
    let body = document.getElementsByTagName('g')[1]
    console.log(body.style);
  }


  changeBackgroundColor = (color) => {
    let body = document.getElementsByTagName('g')[1]
    body.style.fill = color.hex
  };

  render() {
    return (
      <CirclePicker
      color={ this.state.background }
      onChangeComplete={(color) => this.changeBackgroundColor(color)}
      circleSize = {16}
      width = {126}
      />
    );
  }
}

export default ColorPalette



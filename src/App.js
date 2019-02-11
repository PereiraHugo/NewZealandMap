import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
//import Topologicalmap from './components/Topologicalmap/Topologicalmap';
import Mapcontent from './components/Mapcontent/Mapcontent';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <Mapcontent />
        </main>
      </div>
    );
  }
}

export default App;

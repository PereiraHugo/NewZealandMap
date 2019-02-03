import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Topologicalmap from './components/Topologicalmap/Topologicalmap';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <Topologicalmap />
        </main>
      </div>
    );
  }
}

export default App;

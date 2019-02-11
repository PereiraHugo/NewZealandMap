import React from 'react';
import './Toolbar.css';
import MapChoice from '../Dropdown/Mapchoice';
import MapSettings from '../Dropdown/Mapsettings';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <a href="/"><img src={"./logo_topo.svg"} style={{height:'56px'}}/></a>
            </div>
            <MapChoice />
            <MapSettings />
        </nav>
    </header>
);


export default toolbar;
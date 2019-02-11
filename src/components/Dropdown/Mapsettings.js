import React from 'react';
import './Dropdown.css';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import ColorPalette from './../Mapsettings/ColorPalette';

class MapSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ButtonToolbar>
                <DropdownButton bsStyle="default" title="Map Settings" id="dropdown-size-medium">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" id="color-palette">
                        <ColorPalette />
                    </MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        );
    }
}

export default MapSettings;
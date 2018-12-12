import React from 'react';
import './Dropdown.css';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

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
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        );
    }
}

export default MapSettings;
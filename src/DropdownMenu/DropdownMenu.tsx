import * as React from 'react';
import './DropdownMenu.css';

class Dropdown extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <ul className="dropdown dropdown-menu">
                {this.props.children}
            </ul>
        );
    }
}
export default Dropdown;
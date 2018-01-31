import * as React from 'react';
import './DropdownMenuItem.css';

export interface Props {
    name?: string;
    title?: string;
    url?: string;
    // tslint:disable-next-line:no-any
    onClick?(e: any): void;
}

class DropdownMenuItem extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { title, name, url } = this.props;
        return (
            <li className="dropdown-menu-item">
                <a href={url || '#'} title={name || title}>{name || this.props.children}</a>
            </li>
        );
    }
}

export default DropdownMenuItem;
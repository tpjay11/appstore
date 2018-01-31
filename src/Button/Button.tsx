import * as React from 'react';
import * as cs from 'classnames';
import './Button.css';

export interface Props {
    type?: string;
    className?: string;
    onClick?(): void;
}
export interface State {
}

class Button extends React.Component<Props, State> {
    render() {
        const { type = 'default' } = this.props;

        return (
            <button
                className={cs('button', `button-${type}`)}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
import * as React from 'react';
import * as cs from 'classnames';
import './Panel.css';

export interface Props {
    title: string;
    subtitle?: string;
    className?: string;
    style?: Object;
}
export interface State {}

class Panel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { title, subtitle, children } = this.props;

        return (
            <div className={cs('panel', this.props.className)} style={this.props.style}>
                <header className="panel__header">
                    <h3 className="panel__title">{title}</h3>
                    <p className="panel__subtitle">{subtitle}</p>
                </header>
                <div className="panel__content">
                    {children}
                </div>
            </div>
        );
    }
}

export default Panel;
import * as React from 'react';
import * as cs from 'classnames';
import './Badge.css';

export interface Props {
    showCount?: boolean;
    counter?: number;
    maxCounter?: number;
}

export interface State { }

class Badge extends React.Component<Props, State> {
    maxCounter: number;

    constructor(props: Props) {
        super(props);
        const { maxCounter } = props;
        this.maxCounter = typeof maxCounter === 'undefined' ? 99 : maxCounter;
    }

    truncCounter(counter: number): string {
        return counter > this.maxCounter ? `${this.maxCounter}+` : `${counter}`;
    }

    render() {
        const { showCount, counter } = this.props;
        const useCounter = showCount && typeof counter !== 'undefined';

        return (
            <div className="badge">
                {this.props.children}
                <sup
                    className={
                        cs(
                            'badge-counter',
                            `badge-counter--${useCounter ? 'num' : 'dot'}`
                        )}
                    title={`${counter}`}
                >
                    {useCounter ? this.truncCounter(counter as number) : null}
                </sup>
            </div>
        );
    }
}

export default Badge;
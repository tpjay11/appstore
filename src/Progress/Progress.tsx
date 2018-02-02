import * as React from 'react';
import './progress.css';
import { clamp } from '../utils';
import * as cs from 'classnames';

export interface Props {
    percent?: number;
    undeterminated?: boolean;
}

class Progress extends React.Component<Props, {}> {
    render() {
        const { percent: propPercent = 0, undeterminated = false } = this.props;
        const percent = clamp(propPercent, 0, 100);

        const style = { width: '100%' };

        if (!undeterminated) {
            style.width = `${percent}%`;
        }

        return (
            <div className={cs('progress', { 'progress-undeterminated': undeterminated })} title={`${percent}%`}>
                <div className="progress-bg" style={style} />
            </div>
        );
    }
}

export default Progress;
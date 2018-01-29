import * as React from 'react';
import './SpriteButton.css';

/* tslint:disable:no-any */
export interface Props {
    src: string;
    className: string;
    onClick(e: any): void;
    onMouseOver?(e: any): void;
    onMouseOut?(e: any): void;
    onMouseDown?(e: any): void;
    onMouseUp?(e: any): void;
    onMouseEnter?(e: any): void;
}

export default class SpriteButton extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isHover: false,
        };
    }

    render() {
        const { onClick, onMouseDown, onMouseEnter, onMouseOver, onMouseUp, onMouseOut, src, className } = this.props;

        return (
            <button
                className={`sprite-btn ${className}`}
                onClick={onClick}
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                onMouseUp={onMouseUp}
                style={{ backgroundImage: `url(${src})` }}
            />
        );
    }
}
import * as React from 'react';
import './ImageButton.css';

/* tslint:disable:no-any */
export interface Props {
    title?: string;
    className?: string;
    disabled?: boolean;
    onClick(e: any): void;
}

class ImageButton extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { title, className, onClick, disabled } = this.props;
        return (
            <button className={`image-button ${className}`} onClick={onClick} title={title} disabled={disabled}>
                {this.props.children}
            </button>
        );
    }
}

export default ImageButton;
import * as React from 'react';
import ImageButton, { Props } from '../ImageButton';
import './NavButton.css';
import './BackButton.css';

function BackButton(props: Props) {
    return (
        <ImageButton
            title="后退"
            className="nav-button nav-button--back"
            onClick={props.onClick}
            disabled={props.disabled}
        />
    );
}

export default BackButton;
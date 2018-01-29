import * as React from 'react';
import ImageButton, { Props } from '../ImageButton';
import './NavButton.css';
import './ForwardButton.css';

function ForwardButton(props: Props) {
    return (
        <ImageButton
            title="前进"
            className="nav-button nav-button--forward"
            onClick={props.onClick}
            disabled={props.disabled}
        />
    );
}

export default ForwardButton;
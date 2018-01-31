import React from 'react';
import './button-style.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'stage': 'suggest',
            'button-color': 'default_style'
        };
        this.handleClick = this
            .handleClick
            .bind(this);
        this.onMouseEnter = this
            .onMouseEnter
            .bind(this);
        this.onMouseLeave = this
            .onMouseLeave
            .bind(this);
    }
    handleClick() {
        this.setState({'stage': 'press', button_color: 'click_style'});
    }
    onMouseEnter() {
        this.setState({'stage': 'hover', button_color: 'hover_style'})
    }

    onMouseLeave() {
        this.setState({'stage': 'suggest', button_color: 'default_style'})
    }
    render() {
        return (
            <div className='button-state'>
                <button
                onMouseUp={this.props.handleMouseUp}
                className={this.state.button_color}
                onMouseEnter={this.onMouseEnter}
                onMouseDown={this.handleClick}
                onMouseLeave={this.onMouseLeave}>{this.state.stage}</button>
            </div>
        )
    }
}


export default Button
import React, {Component} from 'react';
import './button-style.css'

class Button extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            'stage': 'normal',
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
        this.setState({'stage': 'normal', button_color: 'default_style'})
    }
    render() {
        let button = null;
        if (this.props.appInstall === false) {
            button = <button
                onMouseUp={this.props.handleMouseUp}
                className={this.state.button_color}
                onMouseEnter={this.onMouseEnter}
                onMouseDown={this.handleClick}
                onMouseLeave={this.onMouseLeave}>{this.state.stage}</button>
        } else {
            button = <button className='appInstalled'>
                <span>打开</span>
            </button>
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            installing: false,
            installComplete: false
        }
        this.handleProgressBar = this
            .handleProgressBar
            .bind(this)
    }

    componentDidMount() {
        this.handleProgressBar()
    }
    componentDidUpdate() {
        console.log('abc');
        if (this.state.installing === true) {
            this.handleProgressBar()
        }
        if (this.state.installComplete === true) {
            this
                .props
                .handleInstallComplete();
        }
    }
    handleProgressBar() {
        var elem = document.getElementById("myBarTwo");
        var width = 0;
        var id = setInterval(frame.bind(this), 10);
        function frame() {
            if (width >= 75) {
                clearInterval(id);
                if (this.state.installing === false && this.state.installComplete === false) {
                    this.setState({installing: true})
                } else if (this.state.installing === true && this.state.installComplete === false) {
                    this.setState({installing: false, installComplete: true})

                }
            } else {
                width++;
                elem.style.width = width + 'px';
            }

        }
    }
    render() {
        return (
            <div id="myProgressTwo">
                <div
                    id="myBarTwo"
                    className={this.state.installing
                    ? 'installingBar'
                    : 'downloadingBar'}></div>
                {this.state.installing
                    ? <p>安装中</p>
                    : <p>下载中</p>}
            </div>
        )
    }
}
class ItemTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideButton: false,
            'installed': false
        }
        this.hideButton = this
            .hideButton
            .bind(this)
        this.showButton = this
            .showButton
            .bind(this);
    }
    hideButton() {
        this.setState({hideButton: true})
    }
    showButton() {
        this.setState({hideButton: false, installed: true})
    }
    render() {

        return (
            <div className='ItemTwo'>
                <div className='demo-top'>
                <img src="http://placebear.com/96/96" height="124" width="260" />
                </div>
                <div className='demo-bottom'>
                    <div className='text-field'>
                        <p id='one'>Refunct</p>
                        <p id='two'>我是作者</p>
                    </div>
                   {!this.state.hideButton
                    ? <Button handleMouseUp={this.hideButton} appInstall={this.state.installed}/>
                    : <ProgressBar handleInstallComplete={this.showButton}/>}
        
                </div>
            </div>
        )
    }    
}
export default ItemTwo;
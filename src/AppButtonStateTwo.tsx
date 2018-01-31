import * as React from 'react';
import Button from './Button/Button';

interface PP {
    handleInstallComplete(): void;
}
interface PS {
    installing: boolean;
    installComplete: boolean;
}
class ProgressBar extends React.Component<PP, PS> {
    constructor(props: PP) {
        super(props);
        this.state = {
            installing: false,
            installComplete: false
        };
        this.handleProgressBar = this
            .handleProgressBar
            .bind(this);
    }

    componentDidMount() {
        this.handleProgressBar();
    }
    componentDidUpdate() {
        if (this.state.installing === true) {
            this.handleProgressBar();
        }
        if (this.state.installComplete === true) {
            this.props.handleInstallComplete();
        }
    }
    handleProgressBar() {
        var elem = document.getElementById('myBarTwo') as HTMLElement;
        var width = 0;
        /* tslint:disable */
        var id = setInterval(() => {
            if (width >= 75) {
                clearInterval(id);
                if (this.state.installing === false && this.state.installComplete === false) {
                    this.setState({ installing: true });
                } else if (this.state.installing === true && this.state.installComplete === false) {
                    this.setState({ installing: false, installComplete: true });

                }
            } else {
                width++;
                elem.style.width = width + 'px';
            }
        }, 10); // tslint:disable-line
    }
    render() {
        return (
            <div id="myProgressTwo">
                <div
                    id="myBarTwo"
                    className={this.state.installing
                        ? 'installingBar'
                        : 'downloadingBar'}
                />
                {this.state.installing
                    ? <p>安装中</p>
                    : <p>下载中</p>}
            </div>
        );
    }
}
interface P { }
interface S {
    hideButton: boolean;
    installed: boolean;
}
class ItemTwo extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            hideButton: false,
            installed: false
        };
        this.hideButton = this
            .hideButton
            .bind(this);
        this.showButton = this
            .showButton
            .bind(this);
    }
    hideButton() {
        this.setState({ hideButton: true });
    }
    showButton() {
        this.setState({ hideButton: false, installed: true });
    }
    render() {

        return (
            <div className="ItemTwo">
                <div className="demo-top">
                    <img src="http://placebear.com/96/96" height="124" width="260" />
                </div>
                <div className="demo-bottom">
                    <div className="text-field">
                        <p id="one">Refunct</p>
                        <p id="two">我是作者</p>
                    </div>
                    {!this.state.hideButton
                        ? <Button onClick={this.hideButton}>{this.state.installed ? '打开' : '安装'}</Button>
                        : <ProgressBar handleInstallComplete={this.showButton} />}

                </div>
            </div>
        );
    }
}
export default ItemTwo;
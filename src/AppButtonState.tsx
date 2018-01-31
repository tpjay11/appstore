import * as React from 'react';
import Button from './Button/Button';

interface Props {
    handleInstallComplete(): void;
}
interface State {
    installing: boolean;
    installComplete: boolean;
}
class ProgressBar extends React.Component<Props, State> {
    constructor(props: Props) {
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
        const elem = document.getElementById('myBar') as HTMLElement;
        let width = 0;
        let id = setInterval(() => {
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
            <div id="myProgress">
                <div
                    id="myBar"
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

interface P {}
interface S {
    hideButton: boolean;
    installed: boolean;
}
class AppButtonState extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            hideButton: false,
            'installed': false
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
            <div className="Item">
                <img src="http://placebear.com/96/96" height="96" width="96" alt="app" /> {!this.state.hideButton
                    ? <Button type="primary" onClick={this.hideButton}>{this.state.installed ? '打开' : '安装'}</Button>
                    : <ProgressBar handleInstallComplete={this.showButton} />}
            </div>
        );
    }
}
export default AppButtonState;
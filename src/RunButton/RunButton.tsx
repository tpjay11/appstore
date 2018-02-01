import * as React from 'react';
import Button from '../Button';
import Progress from '../Progress';
import './RunButton.css';

export interface Props {
    appID: string;
    state: string;
    onClick?(): void;
}

interface State {
    percent: number;
    error: null | string;
    state: string;
}

class RunButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            percent: 0,
            state: '',
            error: null,
        };
        this.installApp = this.installApp.bind(this);
    }
    installApp() {
        // TODO(liliqiang): install app, change status, percent and error.
        this.setState({
            state: 'downloading',
            percent: 10,
        });
        const id = setInterval(
            () => {
                this.setState((p) => {
                    if (p.percent === 100) {
                        clearInterval(id);
                        
                        return {
                            state: 'done',
                            percent: 100,
                        };
                    }
                    return {
                        state: 'installing',
                        percent: p.percent + 10,
                    };
                });
            },
            1000
        );
    }
    launchApp() {
        // TODO(liliqiang): launchApp
        // tslint:disable:no-console
        console.log(this.props.appID);
    }
    renderButton() {
        return this.props.state === 'installed' ?
            <Button onClick={this.launchApp}>打开</Button>
            : <Button onClick={this.installApp}>安装</Button>;
    }
    progressInfo() {
        const { state } = this.state;

        if (state === 'downloading') {
            return '下载中';
        }

        if (state === 'installing') {
            return '安装中';
        }

        return '';
    }
    renderProgress() {
        return (
            <div className="run-button">
                <Progress percent={this.state.percent} />
                <p className="run-button__progress-tip">{this.progressInfo()}</p>
            </div>
        );
    }
    render() {
        return this.state.state === 'downloading' || this.state.state === 'installing' ?
            this.renderProgress() :
            this.renderButton();
    }
}

export default RunButton;
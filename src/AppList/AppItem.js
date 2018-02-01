import React from 'react';
import './AppList-style.css';

class AppItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this
            .handleClick
            .bind(this);
        this.handleCancel = this
            .handleCancel
            .bind(this);
        this.state = {
            uninstall: false
        }
    }
    handleCancel() {
        this.setState({uninstall: false})
    }
    handleClick() {
        if (this.props.info.installed === true) {
            this.setState({uninstall: true})
        }

    }
    render() {
        let button = null;
        if (this.state.uninstall === true) {
            button = '确定'
        } else {
            button = this.props.info.installed
                ? "卸载"
                : "安装";
        }

        return (
            <div>
                <div className='AppItem'>
                    <img src={this.props.info.imgUrl} alt="icon" width='48px' height='48px'/>
                    <div className='app-info'>
                        <p className='app-name'>{this.props.info.name}</p>
                        <p className='app-version'>版本：{this.props.info.version}</p>
                    </div>
                    <p className='last-use-time'>上次使用时间：{this.props.info.lastUseTime}</p>
                    <p className='app-size'>{this.props.info.size}MB</p>
                    {this.state.uninstall === true && <div>
                        <p className="uninstall-info">确定要卸载此应用吗</p>
                        <button className='cancel-btn' onClick={this.handleCancel}>取消</button>
                    </div>
}
                    {this.state.uninstall && <button>123</button>}
                    <button onClick={this.handleClick}>{button}</button>
                </div>
                <hr/>
            </div>

        )
    }
}

export default AppItem
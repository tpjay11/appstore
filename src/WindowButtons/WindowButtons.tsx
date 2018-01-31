import * as React from 'react';
import './WindowButtons.css';
import ImageButton from '../ImageButton';
import Badge from '../Badge';
import DropdownMenu from '../DropdownMenu';
import DropdownMenuItem from '../DropdownMenu/DropdownMenuItem';

// tslint:disable:no-console no-any
export default class WindowButtons extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        const { toggleMenu, minimize, maximize, revert, close } = props;
        this.toggleMenu = toggleMenu || this.toggleMenu.bind(this);
        this.minimize = minimize || this.minimize.bind(this);
        this.maximize = maximize || this.maximize.bind(this);
        this.revert = revert || this.revert.bind(this);
        this.close = close || this.close.bind(this);
    }
    toggleMenu() {
        console.debug('toggleMenu');
    }
    maximize() {
        console.debug('maximize');
    }
    revert() {
        console.log('revert');
    }
    minimize() {
        console.debug('minimize');
    }
    close() {
        console.debug('close');
    }
    render() {
        const { isMax } = this.props;
        return (
            <div className="window-buttons">
                <ImageButton
                    className="btn btn-full btn--menu"
                    onClick={this.toggleMenu}
                    title="菜单"
                >
                    <Badge counter={0}>
                        <div className="btn-icon--menu" />
                    </Badge>
                    <DropdownMenu>
                        <DropdownMenuItem url="/manager/downloading">
                            <Badge counter={9} showCount={true}>正在下载</Badge>
                        </DropdownMenuItem>
                        <DropdownMenuItem url="/manager/update">
                            {
                                true ?
                                    <Badge counter={0}>
                                        <span style={{ 'paddingRight': '6px' }}>应用更新</span>
                                    </Badge>
                                    : '应用更新'
                            }
                        </DropdownMenuItem>
                        <DropdownMenuItem name="应用卸载" url="/manager/remove" />
                    </DropdownMenu>
                </ImageButton>
                <ImageButton
                    className="btn btn-full btn--min"
                    onClick={this.minimize}
                    title="最小化"
                />
                {isMax ?
                    <ImageButton
                        className="btn btn-full btn--max"
                        onClick={this.maximize}
                        title="最大化"
                    />
                    :
                    <ImageButton
                        className="btn btn-full btn--revert"
                        onClick={this.revert}
                        title="还原"
                    />
                }
                <ImageButton
                    className="btn btn-full btn--close"
                    onClick={this.close}
                    title="关闭"
                />
            </div>
        );
    }
}
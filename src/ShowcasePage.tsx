import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Showcases, { ShowcaseProps as AppInfo } from './Showcases';

export interface RouteProps {
    id: string;
}

export interface Props extends RouteComponentProps<RouteProps> {
}

interface State {
    value: AppInfo[];
    length: number;
}

class ShowcasePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            length: 2,
            value: [
                {
                    id: 'firefox',
                    name: '火狐浏览器',
                    author: 'Mozilla',
                    thumbnail: '',
                    status: 'installed',
                },
                {
                    id: 'chrome',
                    name: '谷歌浏览器',
                    author: 'Google Chrome',
                    thumbnail: '',
                    status: 'uninstalled',
                }
            ]
        };
    }

    render() {
        const { value, length } = this.state;

        const { match: { params: { id } } } = this.props;

        return <Showcases title={id} subtitle={`共${length}个应用`} value={value} />;
    }
}

export default ShowcasePage;
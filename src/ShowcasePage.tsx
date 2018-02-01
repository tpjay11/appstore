import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import Showcases, { ShowcaseProps } from './Showcases';
import { Store, AppInfo } from './Store';

export interface RouteProps {
    id: string;
}

export interface Props extends RouteComponentProps<RouteProps> {
    store: Store;
}

interface State {
    value: ShowcaseProps[];
    length: number;
}

function toProps(info: AppInfo): ShowcaseProps {
    return {
        id: info.id,
        author: info.author,
        name: info.name,
        state: info.state.toString(),
        thumbnail: info.thumbnail,
    };
}

class ShowcasePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            length: 0,
            value: [],
        };
    }

    componentWillMount() {
        const { match: { params: { id } }, store } = this.props;
        store.fetchApps(id).then((v) => {
            this.setState({
                length: v.length,
                value: v.value.map(toProps),
            });
        });
    }

    render() {
        const { value, length } = this.state;

        const { match: { params: { id } }, store } = this.props;

        const cate = store.getCategoryInfoByID(id);
        if (cate === null) {
            return <div>There is no such a category for {id}</div>;
        }

        return <Showcases store={store} title={cate.name} subtitle={`共${length}个应用`} value={value} />;
    }
}

export default observer(ShowcasePage);

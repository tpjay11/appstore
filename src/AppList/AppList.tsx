import * as React from 'react';
import Showcase, { ShowcaseProps as AppInfo } from '../Showcase';
import './AppList.css';

export interface Props {
    value: AppInfo[];
}

interface State { }

class AppList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { value } = this.props;
        return (
            <div className="app-list clearfix">
                {
                    value.map(info => {
                        return <Showcase key={info.id} {...info} />;
                    })
                }
            </div>
        );
    }
}

export default AppList;
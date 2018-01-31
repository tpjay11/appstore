import * as React from 'react';
import Showcase, { Props as AppInfo } from '../Showcase';
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
                        return <Showcase
                            key={info.appID}
                            author={info.author}
                            appID={info.author}
                            name={info.name}
                            thumbnail={info.thumbnail}
                            status={info.status}
                        />;
                    })
                }
            </div>
        );
    }
}

export default AppList;
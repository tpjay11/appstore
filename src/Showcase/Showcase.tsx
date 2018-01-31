import * as React from 'react';
import RunButton from '../RunButton';
import './Showcase.css';

export interface Props {
    appID: string;
    status: string;
    author: string;
    name: string;
    thumbnail: string;
}
interface S {
}

class Showcase extends React.Component<Props, S> {
    render() {
        const { appID, name, author, status, thumbnail } = this.props;
        return (
            <div className="showcase">
                <img className="showcase__thumbnail" src={thumbnail} height="124" width="260" />
                <div className="showcase__detail">
                    <div>
                        <p className="showcase__detail__name">{name}</p>
                        <p className="showcase__detail__author">{author}</p>
                    </div>
                    <div className="showcase__ops">
                        <RunButton appID={appID} status={status} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcase;
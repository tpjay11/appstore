import * as React from 'react';
import { observer, inject } from 'mobx-react';
import RunButton from '../RunButton';
import './Showcase.css';
import { StoreComponentProps, withInjectStore } from '../Store';

export interface Props {
    id: string;
    state: string;
    author: string;
    name: string;
    thumbnail: string;
}

type CProps = Props & StoreComponentProps;

interface State {}

@inject('store')
@observer
class Showcase extends React.Component<CProps, State> {
    render() {
        const { id, name, author, state, thumbnail } = this.props;
        return (
            <div className="showcase">
                <img className="showcase__thumbnail" src={thumbnail} height="124" width="260" />
                <div className="showcase__detail">
                    <div>
                        <p className="showcase__detail__name">{name}</p>
                        <p className="showcase__detail__author">{author}</p>
                    </div>
                    <div className="showcase__ops">
                        <RunButton appID={id} state={state} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withInjectStore(Showcase);
import * as React from 'react';
import { BackButton, ForwardButton } from './NavButton';
import SearchBox from './SearchBox';
import WindowButtons from './WindowButtons';
import './Header.css';

/* tslint:disable:no-any no-console */
const brandLogo = require('./logo.svg');

export interface SearchResult {
    id: string;
    name: string;
    author: string;
    thumbnail: string;
    status: string;
}

class AppHeader extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(e: string) {
        console.log(`search ${e}`);
    }
    onSearchDone(res: SearchResult) {
        console.log('search done');
    }
    onSearchError(err: any) {
        console.log('search error');
    }

    back() {
        console.log(1);
    }
    forward() {
        console.log(1);
    }
    render() {
        const { isMax, disableBack, disableForwoard } = this.props;
        return (
        <div className="header">
            <img className="header-brand" src={brandLogo} alt="Codemao AppStore" title="Codemao AppStore"/>
            <BackButton
                onClick={this.back}
                disabled={disableBack}
            />
            <ForwardButton
                onClick={this.forward}
                disabled={disableForwoard}
            />
            <div className="search-box-wrapper">
                <SearchBox
                    placeholder="搜索"
                    trim={true}
                    onSearch={this.doSearch}
                />
            </div>
            <WindowButtons isMax={isMax}/>
        </div>
        );
    }
}

export default AppHeader;
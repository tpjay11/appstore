import * as React from 'react';
import defaultStore from './Store';

import { Store } from './Store';

export interface StoreComponentProps {
    store: Store;
}

export { AppInfo, AppResult, State } from './AppStore';

export { Store };

export default defaultStore;

// export function inject() {

// }

export class StoreComponent<T extends P, P, S> extends React.Component<P, S> {
    get injected() {
        return this.props as T;
    }
}
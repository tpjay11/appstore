import * as React from 'react';
import { Subtract } from 'utility-types';
import { StoreComponentProps, OuterStoreComopnentProps } from './Store';

const withInjectStore = <P extends StoreComponentProps, State>(
    WrappedComponent: React.ComponentType<P>
) => {
    return class WithInjectStore extends React.Component<
        Subtract<P, StoreComponentProps> & OuterStoreComopnentProps, State> {
        static displayName = `WithInjectStore${WrappedComponent.name}`;

        render() {
            const store = this.props.store!;
            return <WrappedComponent {...this.props} store={store} />;
        }
    };
};

export default withInjectStore;
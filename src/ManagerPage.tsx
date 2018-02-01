import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface RouteProps {
    id: string;
}

export interface Props extends RouteComponentProps<RouteProps> {
}

interface State { }

class ManagerPage extends React.Component<Props, State> {
    render() {
        const { match: { params: { id } } } = this.props;
        return <div>This is manager page for {id}</div>;
    }
}

export default ManagerPage;
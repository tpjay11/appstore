import * as React from 'react';
import Panel from '../Panel';
import { ShowcaseProps } from '../Showcase';
import AppList from '../AppList';

export { ShowcaseProps };

export interface Props {
    title: string;
    subtitle: string;
    value: ShowcaseProps[];
    render?(): React.ReactChild;
}

interface State {
    panelWidth: number;
}

const SHOWCASE_WIDTH = 260;
const SIDEBAR_WIDTH = 170;
const PADDING = 20;
const MIN_MARGIN = 20;

class Showcases extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            panelWidth: 0,
        };
        this.resizePanel = this.resizePanel.bind(this);
    }

    resizePanel() {
        const avaiableWidth = window.innerWidth - SIDEBAR_WIDTH - MIN_MARGIN * 2;
        const n = parseInt(((avaiableWidth + PADDING) / (PADDING + SHOWCASE_WIDTH)).toString(), 10);
        const usedWidth = (SHOWCASE_WIDTH + PADDING) * n - PADDING;
        this.setState({
            panelWidth: usedWidth,
        });
    }

    componentDidMount() {
        this.resizePanel();
        window.addEventListener('resize', this.resizePanel);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizePanel);
    }

    render() {
        const { title, subtitle, value } = this.props;
        const { panelWidth } = this.state;
        return (
            <Panel title={title} subtitle={subtitle} style={{width: `${panelWidth}px`}}>
                <AppList value={value} />
            </Panel>
        );
    }
}

export default Showcases;
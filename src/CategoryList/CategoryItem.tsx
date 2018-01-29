import * as React from 'react';

export interface Props {
    id: string;
    icon: string;
    name: string;
}

class CategoryItem extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { id, name, icon } = this.props;
        return (
            <li className="category-item" data-appid={id}>
                <img src={icon}/>
                <span>{name}</span>
            </li>
        );
    }
}

export default CategoryItem;
import * as React from 'react';
import CategoryItem, { Props as CategoryProps } from './CategoryItem';

export interface Props {
    value: CategoryProps[];
}

class CategoryList extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <ul className="category-list">
                {this.props.value.map(info => (
                    <CategoryItem
                        key={info.id}
                        id={info.id}
                        name={info.name}
                        icon={info.icon}
                    />)
                )}
            </ul>
        );
    }
}

export default CategoryList;
import * as React from 'react';
import CategoryItem, { Props as CategoryProps } from './CategoryItem';
import './CategoryList.css';

export interface Props {
    value: CategoryProps[];
}
export interface CategoryListItemProps {
    id: string;
    name: string;
    icon: string;
    url: string;
    title: string;
}
class CategoryList extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <ul className="category-list">
                {this.props.value.map(info => (
                    // TODO(liliqiang): selected
                    <CategoryItem
                        key={info.id}
                        id={info.id}
                        name={info.name}
                        icon={info.icon}
                        url={info.url}
                        title={info.title}
                        active={info.active}
                    />)
                )}
            </ul>
        );
    }
}

export default CategoryList;
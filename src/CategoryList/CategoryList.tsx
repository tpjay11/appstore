import * as React from 'react';
import { observer, inject } from 'mobx-react';
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

@inject('store')
@observer
class CategoryList extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <ul className="category-list">
                {this.props.value.map(info => (
                    <CategoryItem key={info.id} {...info} />)
                )}
            </ul>
        );
    }
}

export default CategoryList;
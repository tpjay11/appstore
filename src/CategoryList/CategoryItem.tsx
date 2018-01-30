import * as React from 'react';
import './CategoryItem.css';
import * as cs from 'classnames';

export interface Props {
    id: string;
    icon: string;
    name: string;
    url: string;
    title: string;
    active: boolean;
}

class CategoryItem extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { id, name, url, title, active } = this.props;
        return (
            <li className={cs('category-item', `category-item--${id}`, { active })} data-appid={id}>
                <a href={url} title={title}>
                    {/* TODO(liliqiang): hover icon */}
                    <img className="category-item__icon" src={`${process.env.PUBLIC_URL}/${id}_normal.svg`} />
                    <span className="category-item__name">{name}</span>
                </a>
            </li>
        );
    }
}

export default CategoryItem;
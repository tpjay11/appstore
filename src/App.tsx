import * as React from 'react';
import AppStoreHeader from './Header';
import './App.css';
import CategoryList, { CategoryProps as CategoryListItemProp } from './CategoryList';

export interface CategoryProps {
  id: string;
  name: string;
  icon: string;
}
export interface Props {
  categories: CategoryProps[];
}

function toCategoryListItemProp(prop: CategoryProps): CategoryListItemProp {
  return {
    ...prop,
    url: `/cat/${prop.id}`,
    title: `${prop.name}分类`,
    active: false,
  };
}

class App extends React.Component<Props, {}> {
  categories: CategoryListItemProp[];

  constructor(props: Props) {
    super(props);
    this.categories = props.categories.map(toCategoryListItemProp);
  }
  render() {
    return (
      <>
        <AppStoreHeader isMax={false} />
        <div className="content">
          <aside>
            <nav>
              <CategoryList value={this.categories} />
            </nav>
          </aside>
          <main>
            {/* <router-view></router-view> */}
            This is the main section to display apps.
          </main>
        </div>
      </>
    );
  }
}

export default App;

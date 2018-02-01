import * as React from 'react';
import { Route } from 'react-router-dom';
import AppStoreHeader from './Header';
import './App.css';
import CategoryList, { CategoryProps as CategoryListItemProp } from './CategoryList';
import ShowcasePage from './ShowcasePage';
import SearchResultPage from './SearchResultPage';
import ManagerPage from './ManagerPage';

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
    title: `${prop.name}分类`,
    url: `/cate/${prop.id}`,
    active: false,
  };
}

class App extends React.Component<Props, { categories: CategoryListItemProp[] }> {
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
            <Route
              path="/cate/:id"
              component={ShowcasePage}
            />
            <Route
              path="/search"
              component={SearchResultPage}
            />
            <Route
              path="/manager/:id"
              component={ManagerPage}
            />
          </main>
        </div>
      </>
    );
  }
}

export default App;

import * as React from 'react';
import { Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import AppStoreHeader from './Header';
import './App.css';
import CategoryList, { CategoryProps as CategoryListItemProp } from './CategoryList';
import ShowcasePage from './ShowcasePage';
import SearchResultPage from './SearchResultPage';
import ManagerPage from './ManagerPage';
import { StoreComponentProps } from './Store';

export interface CategoryProps {
  id: string;
  name: string;
  icon: string;
}

export interface Props extends StoreComponentProps { }

interface State {
}

function toCategoryListItemProp(prop: CategoryProps): CategoryListItemProp {
  return {
    ...prop,
    title: `${prop.name}分类`,
    url: `/cate/${prop.id}`,
    active: false,
  };
}

@inject('store')
@observer
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    const { store } = this.props;
    store.fetchCategories();
  }

  render() {
    return (
      <>
        <AppStoreHeader isMax={false} />
        <div className="content">
          <aside>
            <nav>
              <CategoryList value={this.props.store.allCategories().map(toCategoryListItemProp)} />
            </nav>
          </aside>
          <main>
            <Route
              path="/cate/:id"
              render={(props) => <ShowcasePage {...props} store={this.props.store} />}
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

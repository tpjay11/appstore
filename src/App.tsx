import * as React from 'react';
import AppStoreHeader from './Header';
import './App.css';
import CategoryList, { CategoryProps as CategoryListItemProp } from './CategoryList';
import Showcases from './Showcases';

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

const appData = [
  {
    appID: 'firefox',
    name: '火狐浏览器',
    author: 'Mozilla',
    thumbnail: '',
    status: 'installed',
  },
  {
    appID: 'chrome',
    name: '谷歌浏览器',
    author: 'Google Chrome',
    thumbnail: '',
    status: 'uninstalled',
  }
];

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
            <Showcases title="语文" subtitle={`共${appData.length}个应用`} value={appData}/>
          </main>
        </div>
      </>
    );
  }
}

export default App;

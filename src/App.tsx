import * as React from 'react';
import AppStoreHeader from './Header';
import './App.css';
import CategoryList, { CategoryProps } from './CategoryList';

export interface Props {
  categories: CategoryProps[];
}
class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        <AppStoreHeader isMax={false} />
        <div className="content">
          <aside>
            <CategoryList value={this.props.categories}/>
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

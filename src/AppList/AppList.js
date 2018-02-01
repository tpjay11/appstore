import React, {Component} from 'react';
import AppItem from './AppItem.js'

class AppList extends Component {
  constructor(props) {
    super(props);
    this.appInfo = [
      {
        imgUrl: 'https://loremflickr.com/48/48',
        name: '峰子的夜市',
        version: '2.3.1',
        lastUseTime: '2018.12.02',
        size: 50.2,
        installed: true
      }, {
        imgUrl: 'https://loremflickr.com/48/48',
        name: '银河历险记',
        version: '2.1.1',
        lastUseTime: '2017.12.02',
        size: 40.2,
        installed: false
      }, {
        imgUrl: 'https://loremflickr.com/48/48',
        name: '塞尔达传说:旷野之息',
        version: '3.3.1',
        lastUseTime: '2016.12.02',
        size: 30.2,
        installed: false
      }
    ]

  }
  generateAppList() {
    const listItems = this.appInfo.map((info) => {
        return <AppItem info={info} key={info.name}/>
      })
    return (listItems)
  }
  render() {
    return (
      <div className='applist'>
        {/* <div className='title'>
          <ul>
            <li>正在下载</li>
            <li>应用更新</li>
            <li className='section-selected'>应用列表</li>
          </ul>
          <p>23个应用已安装</p>
        </div> */}
        <div className='content'>
          {this.generateAppList()}
        </div>
      </div>
    );
  }
}

export default AppList;

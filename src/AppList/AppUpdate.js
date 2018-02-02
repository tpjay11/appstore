import React, {Component} from 'react';
import AppUpdateItem from './AppUpdateItem.js'

class AppUpdate extends Component {
  constructor(props) {
    super(props);
    this.appInfo = [
      {
        imgUrl: 'https://loremflickr.com/48/48',
        name: '峰子的夜市',
        version: '2.3.1',
        publishTime: '2018.12.23',
        downloadSize:30.1,
        totoalSize: 50.2,
        description:['1.新增播放记录页，完全管理我的播放记录' ,'2.新增收藏页，收藏视频全展现']
      }, {
        imgUrl: 'https://loremflickr.com/48/48',
        name: '银河历险记',
        version: '2.1.1',
        publishTime: '2017.12.02',
        downloadSize:40.2,
        totoalSize: 40.2,
        description:['1.新增播放记录页，完全管理我的播放记录 ','2.新增收藏页，收藏视频全展现','3.新增播放记录页，完全管理我的播放记录','4.新增收藏页，收藏视频全展现','5.新增播放记录页，完全管理我的播放记录']
      }, {
        imgUrl: 'https://loremflickr.com/48/48',
        name: '塞尔达传说:旷野之息',
        version: '3.3.1',
        publishTime: '2016.12.02',
        downloadSize:30.1,
        totoalSize: 50.2,
        description: ['1.新增播放记录页，完全管理我的播放记录','2.新增收藏页，收藏视频全展现 ','3.更多优化，等你发现']
      },{
        imgUrl: 'https://loremflickr.com/48/48',
        name: 'Reigns',
        version: '2.3.1',
        publishTime: '2016.12.02',
        totoalSize: 30.2,
        downloadSize:30.2,
        description:['1.新增播放记录页，完全管理我的播放记录 ','2.新增收藏页，收藏视频全展现','3.新增播放记录页，完全管理我的播放记录','4.新增收藏页，收藏视频全展现','5.新增播放记录页，完全管理我的播放记录']        
      }
    ]

  }
  generateAppList() {
    const listItems = this.appInfo.map((info) => {
        return <AppUpdateItem info={info} key={info.name}/>
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

export default AppUpdate;

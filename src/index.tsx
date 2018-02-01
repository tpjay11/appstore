import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const categories = [
  { id: 'chinese', name: '语文', icon: 'chinese_normal.svg' },
  { id: 'math', name: '数学', icon: 'math_normal.svg' },
  { id: 'english', name: '英语', icon: 'english_normal.svg' },
  { id: 'physical', name: '物理', icon: 'physical_normal.svg' },
  { id: 'chemistry', name: '化学', icon: 'chemistry_normal.svg' },
  { id: 'bio', name: '生物', icon: 'bio_normal.svg' },
  { id: 'political', name: '政治', icon: 'political_normal.svg' },
  { id: 'history', name: '历史', icon: 'history_normal.svg' },
  { id: 'geo', name: '地理', icon: 'geo_normal.svg' },
  { id: 'music', name: '音乐', icon: 'music_normal.svg' },
  { id: 'art', name: '美术', icon: 'art_normal.svg' },
  { id: 'science', name: '科学', icon: 'science_normal.svg' },
  { id: 'nature', name: '自然', icon: 'nature_normal.svg' },
  { id: 'it', name: '信息', icon: 'it_normal.svg' },
  { id: 'moral', name: '品德与社会', icon: 'moral_normal.svg' },
  { id: 'others', name: '其他工具', icon: 'others_normal.svg' },
];

ReactDOM.render(
  <BrowserRouter>
    <App categories={categories} />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

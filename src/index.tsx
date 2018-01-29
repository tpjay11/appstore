import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const categories = [
  { id: 'chinese', name: '语文', icon: '' },
  { id: 'math', name: '数学', icon: '' },
  { id: 'chemistry', name: '化学', icon: '' },
  { id: 'bio', name: '生物', icon: '' },
  { id: 'political', name: '政治', icon: '' },
  { id: 'history', name: '历史', icon: '' },
  { id: 'geo', name: '地理', icon: '' },
  { id: 'music', name: '音乐', icon: '' },
  { id: 'art', name: '美术', icon: '' },
  { id: 'since', name: '科学', icon: '' },
  { id: 'nature', name: '自然', icon: '' },
  { id: 'it', name: '信息', icon: '' },
  { id: 'social', name: '品德与社会', icon: '' },
  { id: 'others', name: '其他工具', icon: '' },
];

ReactDOM.render(
  <App categories={categories} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

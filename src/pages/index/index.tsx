import { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss';

const HOME_TAB_LIST = [
  { title: '机票', tab: 'flight', index: 0 },
  { title: '火车票', tab: 'train', index: 1 },
  { title: '酒店', tab: 'hotel', index: 2 },
  { title: '汽车票', tab: 'bus', index: 3 },
];

export default class Index extends Component {

  render () {
    return (
      <View className='index-container'>
        <View className='topbar'>
          { HOME_TAB_LIST.map(item => (
            <View key={item.tab} className='topbar-item'>
              {item.title}
            </View>
          )) }
        </View>
      </View>
    );
  }
}

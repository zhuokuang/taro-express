import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

function Order () {

  const [name, setName] = useState('kz');

  return (
    <View className='order' onClick={() => setName(name === 'kz' ? 'cr' : 'kz')}>
      <Text>{name}</Text>
    </View>
  );
}

export default Order;

/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import MainStack from './Src/navigation/MainStack';

const App = () => {
  return (
    <View style={{flex:1}}>
      <MainStack/>
    </View>
  );
};

export default App;

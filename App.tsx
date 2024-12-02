/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainStack from './Src/navigation/MainStack';


const App = () => {
  return (
    <View style={styles.container}>
      <MainStack/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
  },
});

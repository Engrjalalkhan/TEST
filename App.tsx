/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Homescreen from './Src/screens/Homescreen';
import Header from './Src/Components/Header';
import Swapimage from './Src/Components/Swapimage';
import Footer from './Src/Components/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Swapimage/>
      <Footer/>
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

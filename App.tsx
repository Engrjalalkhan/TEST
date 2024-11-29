/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Contact from './Src/screens/Contact';
import Projects from './Src/screens/Projects';
import Testimonials from './Src/screens/Testimonials';
import Technology from './Src/screens/Technology';

const App = () => {
  return (
    <View style={styles.container}>
      <Technology/>
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

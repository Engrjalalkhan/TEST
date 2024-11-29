/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Technology from './Src/screens/Technology';
import Contact from './Src/screens/Contact';


const App = () => {
  return (
    <View style={styles.container}>
      <Contact/>
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

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from '../screens/Homescreen';
import About from '../screens/About';
import Technology from '../screens/Technology';
import Quality from '../screens/Quality';
import SEO from '../screens/SEO';
import Testimonials from '../screens/Testimonials';
import Contact from '../screens/Contact';
import Projects from '../screens/Projects';
import Header from '../Components/Header';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{headerShown:false}}
      >
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Technology" component={Technology} />
        <Drawer.Screen name="Quality" component={Quality} />
        <Drawer.Screen name="SEO" component={SEO} />
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="Testimonials" component={Testimonials} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

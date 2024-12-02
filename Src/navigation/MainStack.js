import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import { createStackNavigator } from '@react-navigation/stack';  // Import Stack Navigator
import Homescreen from '../screens/Homescreen';
import About from '../screens/About';
import Projects from '../screens/Projects';
import Testimonials from '../screens/Testimonials';
import SEO from '../screens/SEO';
import Technology from '../screens/Technology';
import Quality from '../screens/Quality';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();  // Create a Stack navigator

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Testimonials" component={Testimonials} />
        <Stack.Screen name="SEO" component={SEO} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Quality" component={Quality} />
        <Stack.Screen name="Contact" component={Contact} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

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
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
        <Stack.Screen name="Projects" component={Projects} options={{headerShown:false}}/>
        <Stack.Screen name="Testimonials" component={Testimonials} options={{headerShown:false}}/>
        <Stack.Screen name="SEO" component={SEO} options={{headerShown:false}}/>
        <Stack.Screen name="Technology" component={Technology} options={{headerShown:false}}/>
        <Stack.Screen name="Quality" component={Quality} options={{headerShown:false}}/>
        <Stack.Screen name="Contact" component={Contact} options={{headerShown:false}}/>
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

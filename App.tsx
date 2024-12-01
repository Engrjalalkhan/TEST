import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; // Import NavigationContainer
import {createStackNavigator} from '@react-navigation/stack'; // Import Stack Navigator
import Homescreen from './Src/screens/Homescreen';
import About from './Src/screens/About';
import Projects from './Src/screens/Projects';
import Testimonials from './Src/screens/Testimonials';
import SEO from './Src/screens/SEO';
import Technology from './Src/screens/Technology';
import Quality from './Src/screens/Quality';
import Contact from './Src/screens/Contact';

const Stack = createStackNavigator(); // Create a Stack navigator

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
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

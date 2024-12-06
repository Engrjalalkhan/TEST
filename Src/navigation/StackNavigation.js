import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SEO from '../screens/SEO';
import Projects from '../screens/Projects';
import Testimonials from '../screens/Testimonials';
import Contact from '../screens/Contact';
import DrawerNavigator from './DrawerNavigation';
import BottomTabs from './BottomTabNavigation';
import AboutUs from '../screens/StackScreens/AboutUs';
import Technologys from '../screens/StackScreens/Technologys';
import QualityStatment from '../screens/StackScreens/QualityStatment';
import Splash from '../screens/auth/Splash';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={Splash}/>
    <Stack.Screen name="SEO" component={SEO} />
    <Stack.Screen name="AboutUs" component={AboutUs} />
    <Stack.Screen name="Technologys" component={Technologys} />
    <Stack.Screen name="QualityStatment" component={QualityStatment} />
    <Stack.Screen name="Projects" component={Projects} />
    <Stack.Screen name="Testimonials" component={Testimonials} />
    <Stack.Screen name="Contact" component={Contact} />
    <Stack.Screen name="DrawarNavigator" component={DrawerNavigator} />
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
  </Stack.Navigator>
);

export default StackNavigator;

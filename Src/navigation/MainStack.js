/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Homescreen from '../screens/Homescreen';
import About from '../screens/About';
import Technology from '../screens/Technology';
import Quality from '../screens/Quality';
import SEO from '../screens/SEO';
import Testimonials from '../screens/Testimonials';
import Contact from '../screens/Contact';
import Projects from '../screens/Projects';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AnimatedTabIcon = ({name, color, focused}) => {
  const translateY = useSharedValue(focused ? -5 : 0); // Subtle upward movement

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(translateY.value)}],
  }));

  return (
    <Animated.View style={[animatedStyle, {paddingBottom: focused ? 2 : 0}]}>
      <MaterialCommunityIcons name={name} color={color} size={28} />
    </Animated.View>
  );
};

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarActiveTintColor: '#0041c2',
      tabBarInactiveTintColor: '#bbb',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth:1,
        borderTopColor:'black',
        height: 60,
        paddingBottom: 5,
        paddingTop:5,
      },
      headerShown: false,
      tabBarIcon: ({color, focused}) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'About':
            iconName = 'information-outline';
            break;
          case 'Technology':
            iconName = 'laptop';
            break;
          case 'Quality':
            iconName = 'check-circle-outline';
            break;
        }

        return (
          <AnimatedTabIcon name={iconName} color={color} focused={focused} />
        );
      },
      tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 5,
      },
    })}>
    <Tab.Screen name="Home" component={Homescreen} />
    <Tab.Screen name="About" component={About} />
    <Tab.Screen name="Technology" component={Technology} />
    <Tab.Screen name="Quality" component={Quality} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const getDrawerActiveColor = routeName => {
    switch (routeName) {
      case 'Dashboard':
        return '#0041c2';
      case 'SEO':
        return '#0041c2';
      case 'Projects':
        return '#0041c2';
      case 'Testimonials':
        return '#0041c2';
      case 'Contact':
        return '#0041c2';
      default:
        return '#0041c2';
    }
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          drawerActiveTintColor: getDrawerActiveColor(route.name), // Dynamic active color based on screen
          drawerInactiveTintColor: '#555',
          drawerStyle: {
            backgroundColor: '#f8f8f8',
          },
        })}>
        <Drawer.Screen
          name="Dashboard"
          component={BottomTabs}
          options={{
            drawerLabel: 'Dashboard',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="SEO"
          component={SEO}
          options={{
            drawerLabel: 'SEO',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Projects"
          component={Projects}
          options={{
            drawerLabel: 'Projects',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="folder-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Testimonials"
          component={Testimonials}
          options={{
            drawerLabel: 'Testimonials',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="message-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerLabel: 'Contact Us',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="phone-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

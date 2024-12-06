/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homescreen from '../screens/Homescreen';
import About from '../screens/About';
import Technology from '../screens/Technology';
import Quality from '../screens/Quality';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const AnimatedTabIcon = ({ name, color, focused }) => {
  const translateY = useSharedValue(focused ? -5 : 0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  return (
    <Animated.View style={[animatedStyle, { paddingBottom: focused ? 2 : 0 }]}>
      <MaterialCommunityIcons name={name} color={color} size={28} />
    </Animated.View>
  );
};

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#0041c2',
      tabBarInactiveTintColor: '#bbb',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'black',
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
      },
      headerShown: false,
      tabBarIcon: ({ color, focused }) => {
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

export default BottomTabs;

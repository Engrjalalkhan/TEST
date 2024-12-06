/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabs from './BottomTabNavigation';
import StackNavigator from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      drawerActiveTintColor: '#0041c2',
      drawerInactiveTintColor: '#555',
      drawerStyle: {
        backgroundColor: '#f8f8f8',
      },
    })}>
    <Drawer.Screen
      name="Dashboard"
      component={BottomTabs} // Only the BottomTabs are included in the Drawer
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
  </Drawer.Navigator>
);

export default DrawerNavigator;

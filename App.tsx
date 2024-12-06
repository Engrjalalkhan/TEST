import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SearchProvider} from './Src/Components/SearchContext'; // Import the SearchContext
import StackNavigator from './Src/navigation/StackNavigation';

const App = () => {
  return (
    <SearchProvider>
      <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </SearchProvider>
  );
};

export default App;

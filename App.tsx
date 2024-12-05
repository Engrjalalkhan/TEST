import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {SearchProvider} from './Src/Components/SearchContext'; // Import the SearchContext
import MainStack from './Src/navigation/MainStack'; // Your app's navigator

const App = () => {
  return (
    <SearchProvider>
      <MainStack />
    </SearchProvider>
  );
};

export default App;

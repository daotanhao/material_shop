import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTab from './components/BottomTab';
import { LogBox } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

LogBox.ignoreAllLogs();

import React from 'react';
import Home from './screens/Home/index.js';
import { LogBox } from 'react-native';

export default function App() {
  return <Home />;
}
LogBox.ignoreAllLogs();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './components/BottomTab';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Theme from './screens/Theme';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function Navigation() {
  const state = useSelector((state) => state);
  console.log('current state', state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ThemeScreen"
          component={Theme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

LogBox.ignoreAllLogs();

import React from 'react';
import 'react-native-gesture-handler';
import { SignIn, SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App= () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

export default App;

// routes.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Registrar" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

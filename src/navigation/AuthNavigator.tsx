// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/auth/Login';
import {screenName} from '../core';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenName.login} component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;

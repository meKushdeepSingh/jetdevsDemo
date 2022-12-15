import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import {constants, screenName} from '../core';
import AppNavigator from './AppNavigator';
import {useSelector} from 'react-redux';
import {dispatch, getStore, RootState} from '../store';
import {getAsyncItem} from '../services';
import {setProfileData} from '../store/modules/authSlice';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  /********** Hooks Functions **********/
  const {profileData} = useSelector((state: RootState) => ({
    profileData: state.auth?.profileData,
  }));

  const showApp = useRef(false);

  useEffect(() => {
    checkUser();
    return () => {};
  }, []);

  /********** Main Functions **********/
  const checkUser = async () => {
    let userData: any = await getAsyncItem(constants.asyncUserToken);
    if (userData) {
      dispatch(setProfileData(userData));
    }
    showApp.current = true;
  };

  return (
    <NavigationContainer>
      {showApp && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {profileData && profileData?.email ? (
            <Stack.Screen name={screenName.app} component={AppNavigator} />
          ) : (
            <Stack.Screen name={screenName.auth} component={AuthNavigator} />
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

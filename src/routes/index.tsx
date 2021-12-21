import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Login } from '~/pages/Login';

import { Header } from '~/components/Header';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { LOGIN_SCREEN } from '~/constants/routes';
import Theme from '~/themes';

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ThemeProvider theme={Theme.light}>
        <NavigationContainer>
          <StackLogin.Navigator initialRouteName={LOGIN_SCREEN}>
            <StackLogin.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{ headerShown: false }}
            />
          </StackLogin.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  Details: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

// Rotas de navegação entre as Screens do projeto
export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        }
      }}
      initialRouteName='SignIn'
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={AppointmentDetails} />
    </Navigator>
  );
}
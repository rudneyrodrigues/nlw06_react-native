import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

// Container e rotas da aplicação
export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
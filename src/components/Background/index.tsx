import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

// Função que aplica um gradiente de cores na aplicação
export function Background({ children }: Props) {
  const {secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
     style={styles.container}
     colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
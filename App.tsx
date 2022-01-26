import React from 'react';
import { LogBox, StatusBar } from 'react-native';
// Importação para que a Page Loading fique em execução até o carregamento das fontes
import AppLoading from 'expo-app-loading';

// Importação das fontes do projeto
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])

// Importação dos compontentes e screens do projeto
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  // Carregamento de fontes personalizadas dentro do App
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Background>
        <StatusBar
          // Personalização da StatusBar
          // barStyle deixa o conteúdo da StatusBar branco
          barStyle="light-content"
          // backgroundColor deixa a StatusBar branca
          backgroundColor='transparent'
          // translucent deixa a StatusBar transparente
          translucent
        />
        <Routes />
      </Background>
    )
  }
}
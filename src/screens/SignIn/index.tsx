import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { RootStackParamList } from '../../routes/auth.routes';

import { styles } from './style';

type homeScreenProp = StackNavigationProp<RootStackParamList>;

export function SignIn() {
  const navigation = useNavigation<homeScreenProp>();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          source={ IllustrationImg }
          style={styles.image}
          resizeMode='stretch'
          // resizeMode é utilizado para que a imagem prevenir que a imagem
          // ira seguir nossas configurações de tamanho e posição
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}
            e organize suas{`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title='Entrar com o Discord'
            onPress={handleSignIn}
          />
        </View>
      </View>
    </>
  )
}
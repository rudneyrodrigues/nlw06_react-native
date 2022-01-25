import {
  Image,
  Text,
  View,
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';

import { styles } from './style';

export function SignIn() {
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
            activeOpacity={0.7}
          />
        </View>
      </View>
    </>
  )
}
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
// import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text,
  Image,
  View,
} from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { styles } from './styles';

// interface Props extends RectButtonProps {
//   title: string;
// }

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return(
    // TouchableOpacity é utilizado para que o usuário possa clicar no botão
    // ...rest é utilizado para que o TouchableOpacity possa receber todas as
    // propriedades presentes na interface

    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
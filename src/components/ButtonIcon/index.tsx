import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { styles } from './styles';

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
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}